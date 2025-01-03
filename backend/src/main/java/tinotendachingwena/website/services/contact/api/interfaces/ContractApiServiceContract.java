package tinotendachingwena.website.services.contact.api.interfaces;

import tinotendachingwena.website.models.contact.forms.ContactForm;

public interface ContractApiServiceContract {

    /**
     * Asynchronously sends an email with a backoff policy. If sending an email fails for whatever reason, we retry
     * 3 times before terminating
     * @param contactForm validated contact form
     */
    void  sendContactForm(ContactForm contactForm);
}
