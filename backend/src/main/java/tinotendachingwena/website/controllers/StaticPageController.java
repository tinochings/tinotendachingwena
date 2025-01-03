package tinotendachingwena.website.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticPageController {

    @GetMapping("/")
    public String home(){
        return "/en.html";
    }
}
