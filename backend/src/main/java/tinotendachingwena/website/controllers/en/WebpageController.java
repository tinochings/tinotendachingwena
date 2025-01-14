package tinotendachingwena.website.controllers.en;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/en")
public class WebpageController {

    @GetMapping(value = {"/", ""})
    public String home(){
        return "/en.html";
    }
    @GetMapping("/experiences")
    public String experiences(){
        return "/en/experiences.html";
    }

    @GetMapping("/contact")
    public String contact(){
        return "/en/contact.html";
    }
}
