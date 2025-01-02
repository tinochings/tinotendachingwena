package tinotendachingwena.website.services.contact.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.policies.EmailBackOffPolicy;
import tinotendachingwena.website.services.contact.api.interfaces.ContractApiServiceContract;
import tinotendachingwena.website.services.mailsenders.sender.ContactFormEmailSender;

@Service
public class ContactApiService implements ContractApiServiceContract {

    private final ContactFormEmailSender contactFormEmailSender;
    private static final Logger logger = LoggerFactory.getLogger(ContactApiService.class);

    public ContactApiService(ContactFormEmailSender contactFormEmailSender) {
        this.contactFormEmailSender = contactFormEmailSender;
    }

    /**
     * Sends a contact form request to tinotendachings@gmail.com. This method retries 3 times
     * before failing and logging a warning
     * @param contactForm validated contact form
     */
    @Async
    @Override
    public void sendContactForm(ContactForm contactForm){
        short retryCounter = 4;
        EmailBackOffPolicy emailBackOffPolicy = new EmailBackOffPolicy(100);
        while (retryCounter > 0) {
            if (contactFormEmailSender.sendPlainMessage(contactForm) == 0)
                return;
            try {
                Thread.sleep(emailBackOffPolicy.calculateBackOff());
            } catch (InterruptedException e){
                Thread.currentThread().interrupt();
            }

            retryCounter--;
        }
        logger.warn("Failed to send an email to: {}. Kindly engage requester with email address {} and message {}",
                contactForm.getName(), contactForm.getEmail(), contactForm.getMessage());
    }
}
