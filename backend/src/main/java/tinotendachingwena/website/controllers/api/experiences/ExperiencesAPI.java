package tinotendachingwena.website.controllers.api.experiences;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;
import tinotendachingwena.website.models.experiences.ProjectItem;
import tinotendachingwena.website.services.experiences.ExperienceAPIService;

@Controller
@RequestMapping("/api/experiences")
public class ExperiencesAPI {

    private final ExperienceAPIService experienceAPIService;

    public ExperiencesAPI(ExperienceAPIService experienceAPIService) {
        this.experienceAPIService = experienceAPIService;
    }

    @GetMapping(value = "/{language}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProjectItem[]> projects(@NonNull @PathVariable String language){
        if(!language.equals("en") && !language.equals("sn"))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        ProjectItem[] projectItems = experienceAPIService.getExperiences(language);
        if (projectItems != null)
            return new ResponseEntity<>(projectItems, HttpStatus.OK);

        throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
