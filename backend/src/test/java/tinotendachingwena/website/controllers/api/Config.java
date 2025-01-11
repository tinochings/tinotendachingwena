package tinotendachingwena.website.controllers.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.core.task.SyncTaskExecutor;
import org.springframework.core.task.TaskExecutor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.Mockito.*;

@Profile("test")
@Configuration
public class Config  {

    @Bean
    @Primary
    public JavaMailSender javaMailSender() {
        JavaMailSender javaMailSender = mock(JavaMailSender.class);
        doNothing().when(javaMailSender).send(any(SimpleMailMessage.class));
        return javaMailSender;
    }

    @Bean
    @Primary
    public TaskExecutor taskExecutor(){
        return new SyncTaskExecutor();
    }
}
