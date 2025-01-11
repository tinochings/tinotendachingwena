package tinotendachingwena.website.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.local.LockFreeBucket;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockedConstruction;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cache.CacheManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.models.error.ErrorResponse;
import tinotendachingwena.website.utilities.StringUtility;

import java.util.Objects;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ActiveProfiles("test")
@AutoConfigureMockMvc
public class RateLimitFilterTests {
    @Autowired
    private MockMvc mockMvc;
    @Spy
    @Autowired
    private CacheManager cacheManager;
    private final ContactForm contactForm = new ContactForm("","","");
    private final String toPost = "{ name: a, email:a@a.com, message:a}";

    @BeforeEach
    public void setup() {
        cacheManager.getCache(StringUtility.rateLimiterCacheName).clear();
    }
    @Test
    public void testBucketInsertedIntoCache() throws Exception {
        String remoteAddress = mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getRequest()
                .getRemoteAddr();

        assert cacheManager.getCache(StringUtility.rateLimiterCacheName) != null;
        assert cacheManager.getCache(StringUtility.rateLimiterCacheName).get(remoteAddress) != null;

        Bucket bucket = (Bucket) cacheManager.getCache(StringUtility.rateLimiterCacheName).get(remoteAddress).get();
        assert bucket.getAvailableTokens() == 4;
    }

    @Test
    public void testBucketNotFoundWhenInserting() throws Exception {
        try(MockedConstruction<LockFreeBucket> mockedBucket = Mockito.mockConstruction(LockFreeBucket.class, (mock, context) -> {
            when(mock.tryConsume(1)).thenReturn(false);
        })) {
            MockHttpServletResponse response = mockMvc.perform(post("/api/contact/form")
                            .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getResponse();

            assert Objects.equals(response.getContentType(), MediaType.TEXT_PLAIN_VALUE);
            assert response.getContentAsString().equals("Request could not be processed by the server. Please try again." +
                    " If the problem persists email tinotendachings@gmail.com");
            assert response.getStatus() == HttpStatus.INTERNAL_SERVER_ERROR.value();
        }
    }

    @Test
    public void testReuseBucket() throws Exception {
        String remoteAddress = mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getRequest()
                .getRemoteAddr();
        mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getRequest()
                .getRemoteAddr();

        assert cacheManager.getCache(StringUtility.rateLimiterCacheName) != null;
        assert cacheManager.getCache(StringUtility.rateLimiterCacheName).get(remoteAddress) != null;

        Bucket bucket = (Bucket) cacheManager.getCache(StringUtility.rateLimiterCacheName).get(remoteAddress).get();

        assert bucket.getAvailableTokens() == 3;
    }

    @Test
    public void testBucketNotFound() throws Exception {
        String remoteAddress = mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getRequest()
                .getRemoteAddr();

        Bucket bucket = mock(Bucket.class);
        when(bucket.tryConsume(1)).thenReturn(false);

        cacheManager.getCache(StringUtility.rateLimiterCacheName).put(remoteAddress, bucket);

        MockHttpServletResponse response =mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(toPost).with(csrf())).andReturn().getResponse();

        ErrorResponse errorResponse = new ObjectMapper().readValue(response.getContentAsString(), ErrorResponse.class);

        assert errorResponse.getHeaderText().equals("Too many requests");
        assert errorResponse.getBodyText().equals("Too many requests within a short period of time. Please wait a minute and then try again");
        assert errorResponse.getStatusCode().equals(String.valueOf(HttpStatus.TOO_MANY_REQUESTS.value()));

    }

    @Test
    public void testGetMethod() throws Exception{
        mockMvc.perform(get("/api/contact/form")).andExpect(status().isMethodNotAllowed());
    }
}
