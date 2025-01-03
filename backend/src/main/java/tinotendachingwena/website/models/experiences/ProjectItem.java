package tinotendachingwena.website.models.experiences;

import java.io.Serializable;
import java.util.Arrays;

public class ProjectItem implements Serializable {

    /**
     * id of the project used for navigation on client side
     */
    private String projectId;
    private String projectName;
    private ProjectImage[] projectImages;
    private String projectAbout;
    private String projectDescription;
    private ProjectLink[] projectLink;

    public ProjectItem(String projectId, String projectName, ProjectImage[] projectImages, String projectAbout,
                       String projectDescription, ProjectLink[] projectLink) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectImages = projectImages;
        this.projectAbout = projectAbout;
        this.projectDescription = projectDescription;
        this.projectLink = projectLink;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public ProjectImage[] getProjectImages() {
        return projectImages;
    }

    public void setProjectImages(ProjectImage[] projectImages) {
        this.projectImages = projectImages;
    }

    public String getProjectAbout() {
        return projectAbout;
    }

    public void setProjectAbout(String projectAbout) {
        this.projectAbout = projectAbout;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public ProjectLink[] getProjectLink() {
        return projectLink;
    }

    public void setProjectLink(ProjectLink[] projectLink) {
        this.projectLink = projectLink;
    }

    @Override
    public String toString() {
        return "ProjectItem{" +
                "projectId='" + projectId + '\'' +
                ", projectName='" + projectName + '\'' +
                ", projectImages=" + Arrays.toString(projectImages) +
                ", projectAbout='" + projectAbout + '\'' +
                ", projectDescription='" + projectDescription + '\'' +
                ", projectLink=" + Arrays.toString(projectLink) +
                '}';
    }
}
