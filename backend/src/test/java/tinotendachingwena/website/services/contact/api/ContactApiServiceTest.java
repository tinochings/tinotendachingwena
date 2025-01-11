package tinotendachingwena.website.services.contact.api;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.services.mailsenders.sender.ContactFormEmailSender;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ContactApiServiceTest {
    @Mock
    private ContactFormEmailSender contactFormEmailSender;
    @InjectMocks
    private ContactApiService contactApiService;
    private final ContactForm contactForm = new ContactForm();

    @Test
    public void testSuccessfulOnFirstTry(){
        when(contactFormEmailSender.sendPlainMessage(any())).thenReturn(0);
        contactApiService.sendContactForm(contactForm);

        verify(contactFormEmailSender, times(1)).sendPlainMessage(any());
    }

    @Test
    public void testSuccessfulOnMaximumTry(){
        when(contactFormEmailSender.sendPlainMessage(any())).thenReturn(-1).thenReturn(-1).thenReturn(-1).thenReturn(0);
        contactApiService.sendContactForm(contactForm);

        verify(contactFormEmailSender, times(4)).sendPlainMessage(any());
    }

    @Test
    public void testCantRetryMoreThanThreeTimes(){
        when(contactFormEmailSender.sendPlainMessage(any())).thenReturn(-1).thenReturn(-1).thenReturn(-1)
                .thenReturn(-1).thenReturn(-1).thenReturn(0);
        contactApiService.sendContactForm(contactForm);

        verify(contactFormEmailSender, times(4)).sendPlainMessage(any());
    }

    @Test
    public void testInterruptedThread(){
        when(contactFormEmailSender.sendPlainMessage(any())).thenReturn(-1).thenReturn(-1).thenReturn(-1)
                .thenReturn(-1).thenReturn(-1).thenReturn(0);
        Thread.currentThread().interrupt();
        contactApiService.sendContactForm(contactForm);

        verify(contactFormEmailSender, times(4)).sendPlainMessage(any());
    }
}
