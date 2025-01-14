package tinotendachingwena.website.filters;

import com.google.gson.Gson;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.local.SynchronizationStrategy;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import tinotendachingwena.website.models.error.ErrorResponse;
import tinotendachingwena.website.utilities.StringUtility;

import java.io.IOException;
import java.time.Duration;
import java.util.Optional;

public class RateLimiter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(RateLimiter.class);
    private final CacheManager cacheManager;

    public RateLimiter(CacheManager cacheManager) {
        this.cacheManager = cacheManager;
    }

    private Bucket createNewBucket() {
        return Bucket.builder()
                .addLimit(limit -> limit.capacity(5).refillIntervally(5, Duration.ofMinutes(1)))
                .withSynchronizationStrategy(SynchronizationStrategy.LOCK_FREE)
                .build();
    }

    /**
     * Filter POST requests by rate limiting each request and storing the corresponding bucket in the cache
     */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
        String cacheKey = httpRequest.getRemoteAddr();
        if (httpRequest.getMethod().equals(HttpMethod.POST.name())) {
            Optional<Bucket> bucketOptional = retrieveBucketFromCache(cacheKey);
            if (bucketOptional.isPresent()) {
                Bucket bucket = bucketOptional.get();
                if (bucket.tryConsume(1)) {
                    filterChain.doFilter(servletRequest, servletResponse);
                } else {
                    HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
                    httpResponse.setContentType("application/json");
                    httpResponse.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                    ErrorResponse errorResponse = new ErrorResponse("Too many requests",
                            "Too many requests within a short period of time. Please wait a minute and " +
                                    "then try again", String.valueOf(HttpStatus.TOO_MANY_REQUESTS.value()));

                    httpResponse.getWriter().write(new Gson().toJson(errorResponse));
                    httpResponse.getWriter().flush();
                }
            } else {
                Bucket bucket = createNewBucket();
                if (bucket.tryConsume(1)) {
                    insertBucketIntoCache(cacheKey, bucket);
                    filterChain.doFilter(servletRequest, servletResponse);
                } else {
                    HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
                    httpResponse.setContentType("text/plain");
                    httpResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
                    httpResponse.getWriter().append("Request could not be processed by the server. Please try again. If the " +
                            "problem persists email tinotendachings@gmail.com");
                }
            }
        } else {
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }

    /**
     * @param cacheKey
     * @return
     */
    private Optional<Bucket> retrieveBucketFromCache(String cacheKey) {
        Cache bucketCache = cacheManager.getCache(StringUtility.rateLimiterCacheName);
        if (bucketCache != null) {
            Cache.ValueWrapper valueWrapper = bucketCache.get(cacheKey);
            if (valueWrapper != null && valueWrapper.get() instanceof Bucket bucket) {
                return Optional.of(bucket);
            }
        }
        return Optional.empty();
    }

    /**
     *
     * @param cacheKey
     * @param bucket
     */
    private void insertBucketIntoCache(String cacheKey, Bucket bucket){
        Cache bucketCache = cacheManager.getCache(StringUtility.rateLimiterCacheName);
        if (bucketCache != null) {
            bucketCache.put(cacheKey, bucket);
        }else {
            logger.error("Cache {} is not found by the cache manager. Rate limiting cannot work.", StringUtility.rateLimiterCacheName);
        }
    }
}
