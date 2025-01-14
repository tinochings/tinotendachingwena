package tinotendachingwena.website.models.contact.response;

import java.io.Serializable;

public class ContactFormResponse implements Serializable {

    private String message;

    public ContactFormResponse() {
    }

    public ContactFormResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
