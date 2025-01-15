package tinotendachingwena.website.controllers;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticPageController {

    @GetMapping("/")
    public String home(){
        System.out.println("I am HERERRER");
        System.out.println((new ClassPathResource("en.html")).exists());
        return "/en.html";
    }
}
