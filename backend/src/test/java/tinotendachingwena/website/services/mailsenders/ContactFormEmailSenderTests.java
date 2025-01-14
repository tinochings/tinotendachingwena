package tinotendachingwena.website.services.mailsenders;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.services.mailsenders.sender.ContactFormEmailSender;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContactFormEmailSenderTests {
    @Mock
    private JavaMailSender javaMailSender;
    @InjectMocks
    private ContactFormEmailSender contactFormEmailSender;
    private final ContactForm contactForm = new ContactForm();

    @BeforeEach
    public void setup(){
        contactForm.setEmail("");
        contactForm.setName("");
        contactForm.setMessage("");
        doNothing().when(javaMailSender).send(any(SimpleMailMessage.class));
    }

    @Test
    public void testEmailSendSuccessful(){
        assert contactFormEmailSender.sendPlainMessage(contactForm) == 0;
    }

    @Test
    public void testErrorThrown() {
        reset(javaMailSender);
        doThrow(MailSendException.class).when(javaMailSender).send(any(SimpleMailMessage.class));
        assert contactFormEmailSender.sendPlainMessage(contactForm) == -1;
    }
}
