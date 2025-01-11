package tinotendachingwena.website.controllers.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import tinotendachingwena.website.models.contact.forms.ContactForm;
import tinotendachingwena.website.models.contact.response.ContactFormResponse;
import tinotendachingwena.website.models.error.ErrorResponse;
import tinotendachingwena.website.utilities.StringUtility;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "test")
public class ContactAPITests {
    @Autowired
    private MockMvc mockMvc;
    private final ContactForm contactForm = new ContactForm();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    public void setup(){
        contactForm.setEmail("");
        contactForm.setName("");
        contactForm.setMessage("");
    }

    @Test
    public void emptyContactForm() throws Exception {
        String objectToSend = objectMapper.writeValueAsString(contactForm);
        String emailValidationText = "Email is not valid\n";
        String emailValidationText1 = "Email must not be empty\n";
        String nameValidationText = "Name must not be empty\n";
        String messageValidationText = "Message must not be empty\n";

        MockHttpServletResponse mockHttpServletResponse = mockMvc.perform(post("/api/contact/form").contentType(MediaType.APPLICATION_JSON)
                .content(objectToSend).with(csrf())).andExpect(status().isBadRequest()).andReturn().getResponse();

        ErrorResponse errorResponse = objectMapper.readValue(mockHttpServletResponse.getContentAsString(), ErrorResponse.class);

        assert errorResponse.getHeaderText().equals("Invalid Input");
        assert errorResponse.getStatusCode().equals(String.valueOf(HttpStatus.BAD_REQUEST.value()));
        assert errorResponse.getBodyText().contains(emailValidationText);
        assert errorResponse.getBodyText().contains(emailValidationText1);
        assert errorResponse.getBodyText().contains(nameValidationText);
        assert errorResponse.getBodyText().contains(messageValidationText);
    }

    @Test
    public void correctFormNoCsrf() throws Exception{
        contactForm.setName("Tinotenda");
        contactForm.setEmail("tinotenda@gmail.com");
        contactForm.setMessage("Hi Tinotenda :)");

        String objectToSend = objectMapper.writeValueAsString(contactForm);
        mockMvc.perform(post("/api/contact/form")
                .contentType(MediaType.APPLICATION_JSON).content(objectToSend))
                .andExpect(status().isForbidden()).andReturn();
    }

    @Test
    public void validForm() throws Exception {
        contactForm.setName("Tinotenda");
        contactForm.setEmail("tinotenda@gmail.com");
        contactForm.setMessage("Hi Tinotenda :)");
        String objectToSend = objectMapper.writeValueAsString(contactForm);

        MockHttpServletResponse mockHttpServletResponse = mockMvc.perform(post("/api/contact/form")
                        .contentType(MediaType.APPLICATION_JSON).content(objectToSend).with(csrf()))
                .andExpect(status().isOk()).andReturn().getResponse();

        ContactFormResponse contactFormResponse = objectMapper.readValue(mockHttpServletResponse.getContentAsString(),
                ContactFormResponse.class);

        assert contactFormResponse.getMessage().equals(StringUtility.contactFormSuccessMessage);
    }
}
