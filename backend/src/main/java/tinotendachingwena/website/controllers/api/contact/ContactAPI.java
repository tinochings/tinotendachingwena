package tinotendachingwena.website.controllers.api.contact;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.models.contact.response.ContactFormResponse;
import tinotendachingwena.website.services.contact.api.ContactApiService;
import tinotendachingwena.website.utilities.StringUtility;

@RestController
@RequestMapping("/api/contact")
public class ContactAPI {
    private final ContactApiService contactApiService;

    public ContactAPI(ContactApiService contactApiService) {
        this.contactApiService = contactApiService;
    }

    @PostMapping(value = "/form", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContactFormResponse> contactForm(@Valid @RequestBody ContactForm contactForm){
        contactApiService.sendContactForm(contactForm);
        return new ResponseEntity<>(new ContactFormResponse(StringUtility.contactFormSuccessMessage), HttpStatus.OK);
    }

}
