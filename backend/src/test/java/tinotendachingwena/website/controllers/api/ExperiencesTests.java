package tinotendachingwena.website.controllers.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.MockedConstruction;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cache.CacheManager;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import tinotendachingwena.website.models.experiences.ProjectItem;
import tinotendachingwena.website.utilities.StringUtility;

import java.io.File;
import java.io.FileInputStream;
import java.util.Objects;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "test")
public class ExperiencesTests {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CacheManager cacheManager;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @AfterEach
    public void destruct(){
        Objects.requireNonNull(cacheManager.getCache(StringUtility.experiencesCacheName)).clear();
    }
    @Test
    public void testNullMethodArgument() throws Exception{
        mockMvc.perform(get("/api/experiences/")).andExpect(status().isNotFound());
    }
    @Test
    public void testInvalidLanguage() throws Exception {
        mockMvc.perform(get("/api/experiences/vmccccc")).andExpect(status().isNotFound());
    }

    @Test
    public void testMalformedJsonFile() throws Exception{
        File file = new File("src/test/resources/db/malformedJson.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            mockMvc.perform(get("/api/experiences/en")).andExpect(status().is5xxServerError());
        }
    }

    @Test
    public void testLoadOneProjectItem() throws Exception{
        File file = new File("src/test/resources/db/oneProject.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            MockHttpServletResponse response = mockMvc.perform(get("/api/experiences/en")).
                    andExpect(status().isOk()).andReturn().getResponse();

            ProjectItem[] projectItemSent = objectMapper.readValue(response.getContentAsString(), ProjectItem[].class);
            assert projectItemSent.length == 1;
        }
    }

    @Test
    public void testLoadManyProjectsItem() throws Exception{
        File file = new File("src/test/resources/db/projects.json");
        try(MockedConstruction<ClassPathResource> mockedClasspathResource = Mockito.mockConstruction(ClassPathResource.class, (mock, context) -> {
            when(mock.getInputStream()).thenReturn(new FileInputStream(file));
            when(mock.exists()).thenReturn(true);
        })) {
            MockHttpServletResponse response = mockMvc.perform(get("/api/experiences/en")).
                    andExpect(status().isOk()).andReturn().getResponse();

            ProjectItem[] projectItemSent = objectMapper.readValue(response.getContentAsString(), ProjectItem[].class);
            assert projectItemSent.length == 7;
            assert projectItemSent[0].getProjectId().equals("madzinza");
            assert projectItemSent[0].getProjectImages()[0].getSecondImage().equals("/images/projectsDone/madzinza/totems.png");
        }
    }
}

