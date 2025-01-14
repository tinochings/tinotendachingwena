package tinotendachingwena.website.services.mailsenders.sender;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.services.mailsenders.interfaces.ContactFormMailInterface;

@Service
public class ContactFormEmailSender implements ContactFormMailInterface {
    private static final Logger logger = LoggerFactory.getLogger(ContactFormEmailSender.class);
    @Value("${spring.mail.username}")
    private String sender;
    private final JavaMailSender mailSender;

    public ContactFormEmailSender(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public int sendPlainMessage(ContactForm contactForm) {

        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(sender);

            simpleMailMessage.setSubject("Contact Form - " + contactForm.getName());
            String personalEmailAddress = "tinotendachings@gmail.com";
            simpleMailMessage.setTo(personalEmailAddress);
            simpleMailMessage.setText(contactForm.getMessage());
            mailSender.send(simpleMailMessage);
            return 0;
        } catch (MailException mailException){
            logger.info("Failed to send an email due to cause {}", mailException.getMessage());
            return -1;
        }
    }
}
