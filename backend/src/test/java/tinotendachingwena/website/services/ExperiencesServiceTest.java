package tinotendachingwena.website.services;

import org.junit.jupiter.api.Test;
import org.mockito.MockedConstruction;
import org.mockito.Mockito;
import org.springframework.core.io.ClassPathResource;
import tinotendachingwena.website.models.experiences.ProjectItem;
import tinotendachingwena.website.services.experiences.ExperienceAPIService;

import java.io.File;
import java.io.FileInputStream;

import static org.mockito.Mockito.when;

public class ExperiencesServiceTest {

    private final ExperienceAPIService experienceAPIService = new ExperienceAPIService();

    @Test
    public void testMalformedJsonFile(){
        File file = new File("src/test/resources/db/malformedJson.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            assert experienceAPIService.getExperiences("en") == null;
        }
    }

    @Test
    public void testLoadOneProjectItem(){
        File file = new File("src/test/resources/db/oneProject.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            ProjectItem[] projectItems = experienceAPIService.getExperiences("en");
            assert projectItems.length == 1;
            assert projectItems[0].getProjectId().equals("madzinza");
            assert projectItems[0].getProjectImages()[0].getSecondImage().equals("/images/projectsDone/madzinza/totems.png");
            assert projectItems[0].getProjectAbout().isEmpty();
        }
    }

    @Test
    public void testLoadManyProjectsItem() throws Exception{
        File file = new File("src/test/resources/db/projects.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            ProjectItem[] projectItems = experienceAPIService.getExperiences("en");
            assert projectItems.length == 7;
            assert projectItems[0].getProjectId().equals("madzinza");
            assert projectItems[0].getProjectImages()[0].getSecondImage().equals("/images/projectsDone/madzinza/totems.png");
            assert projectItems[0].getProjectAbout().isEmpty();

            assert projectItems[6].getProjectId().equals("madzinza");
            assert projectItems[6].getProjectImages()[0].getSecondImage().equals("/images/projectsDone/madzinza/totems.png");
            assert projectItems[6].getProjectAbout().isEmpty();
        }
    }
}
