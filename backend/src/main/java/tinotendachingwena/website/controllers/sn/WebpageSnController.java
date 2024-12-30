package tinotendachingwena.website.controllers.sn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/sn")
public class WebpageSnController {

    @GetMapping(value = {"/", ""})
    public String homeSn(){
        return "/sn.html";
    }

    @GetMapping("/experiences")
    public String experiences(){
        return "/sn/experiences.html";
    }

    @GetMapping("/contact")
    public String contact(){
        return "/sn/contact.html";
    }
}
