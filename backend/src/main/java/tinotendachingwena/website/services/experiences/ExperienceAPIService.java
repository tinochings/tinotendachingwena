package tinotendachingwena.website.services.experiences;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonIOException;
import com.google.gson.JsonSyntaxException;
import com.google.gson.stream.JsonReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import tinotendachingwena.website.models.experiences.ProjectItem;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

@Service
public class ExperienceAPIService {
    private static final Logger logger = LoggerFactory.getLogger(ExperienceAPIService.class);

    /**
     * Parses experiences, caches them and returns to user
     * @param language either en or sn
     * @return an array of project items
     */
    @Cacheable(cacheNames = "experiencesCache", key = "#language", unless = "#result == null")
    public ProjectItem[] getExperiences(String language){
        Gson gson = new GsonBuilder().create();
        ClassPathResource classPathResource;
        if (language.equals("en"))
            classPathResource = new ClassPathResource("db/experiences.json");
        else
            classPathResource = new ClassPathResource("db/experiencesSn.json");

        if (classPathResource.exists()){
            try {
                //critical section
                synchronized (this) {
                        InputStream inputStream = classPathResource.getInputStream();
                        JsonReader reader = gson.newJsonReader(new InputStreamReader(inputStream));
                        return gson.fromJson(reader, ProjectItem[].class);
                }
            } catch (IOException | JsonIOException | JsonSyntaxException exception){
                logger.warn("Failed to read experience file due to exception: {}", exception.getMessage());
            }
        }
        return null;
    }

}
