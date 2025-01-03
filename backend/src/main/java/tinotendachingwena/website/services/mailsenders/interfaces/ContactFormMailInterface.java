package tinotendachingwena.website.services.mailsenders.interfaces;

import tinotendachingwena.website.models.contact.forms.ContactForm;

public interface ContactFormMailInterface {

    /**
     *
     * @param contactForm validated contact form
     * @return 0 if the email was sent successfully else -1
     */
    int sendPlainMessage(ContactForm contactForm);
}
