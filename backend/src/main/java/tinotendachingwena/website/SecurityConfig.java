package tinotendachingwena.website;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import tinotendachingwena.website.filters.RateLimiter;
import tinotendachingwena.website.handlers.SpaCsrfTokenHandler;

@Configuration
@EnableWebSecurity
@EnableCaching
@EnableAsync(proxyTargetClass = true)
public class SecurityConfig {
    private final CacheManager cacheManager;

    public SecurityConfig(CacheManager cacheManager) {
        this.cacheManager = cacheManager;
    }

    @Bean
    public FilterRegistrationBean<RateLimiter> rateLimitFilter(){
        FilterRegistrationBean<RateLimiter> registrationBean
                = new FilterRegistrationBean<>();

        registrationBean.setFilter(new RateLimiter(cacheManager));
        registrationBean.addUrlPatterns("/api/contact/form");
        registrationBean.setOrder(2);

        return registrationBean;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((auth) -> auth.anyRequest().permitAll())
                .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository
                        .withHttpOnlyFalse()).csrfTokenRequestHandler(new SpaCsrfTokenHandler()))
                .sessionManagement(httpSecuritySessionManagementConfigurer ->
                        httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .requiresChannel(channelRequestMatcherRegistry ->
                        channelRequestMatcherRegistry.requestMatchers(request -> request.getHeader("X-Forwarded-Proto") != null)
                                .requiresSecure());

        return http.build();
    }
}
