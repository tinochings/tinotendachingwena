package tinotendachingwena.website;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import tinotendachingwena.website.handlers.SpaCsrfTokenHandler;

@Configuration
@EnableWebSecurity
@EnableCaching
public class SecurityConfig {

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
