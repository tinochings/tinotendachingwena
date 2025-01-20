package tinotendachingwena.website.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import tinotendachingwena.website.models.sitemap.XmlUrlSet;
import tinotendachingwena.website.services.sitemap.SitemapService;

@Controller
public class StaticPageController {
    private final SitemapService sitemapService;

    public StaticPageController(SitemapService sitemapService) {
        this.sitemapService = sitemapService;
    }

    @GetMapping("/")
    public String home(){
        return "/en.html";
    }

    @GetMapping(value = "/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<XmlUrlSet> sitemap(){
        return ResponseEntity.ok(sitemapService.generateSiteMap());
    }
}
