package tinotendachingwena.website.models.experiences;

import java.io.Serializable;
import java.util.Objects;

public class ProjectImage implements Serializable {

    private String firstImage;
    private String firstImageAltText;
    private String secondImage;
    private String secondImageAltText;

    public ProjectImage(String firstImage, String firstImageAltText, String secondImage, String secondImageAltText) {
        this.firstImage = firstImage;
        this.firstImageAltText = firstImageAltText;
        this.secondImage = secondImage;
        this.secondImageAltText = secondImageAltText;
    }

    public String getFirstImage() {
        return firstImage;
    }

    public void setFirstImage(String firstImage) {
        this.firstImage = firstImage;
    }

    public String getFirstImageAltText() {
        return firstImageAltText;
    }

    public void setFirstImageAltText(String firstImageAltText) {
        this.firstImageAltText = firstImageAltText;
    }

    public String getSecondImage() {
        return secondImage;
    }

    public void setSecondImage(String secondImage) {
        this.secondImage = secondImage;
    }

    public String getSecondImageAltText() {
        return secondImageAltText;
    }

    public void setSecondImageAltText(String secondImageAltText) {
        this.secondImageAltText = secondImageAltText;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof ProjectImage that)) return false;
        return Objects.equals(firstImage, that.firstImage) && Objects.equals(firstImageAltText, that.firstImageAltText)
                && Objects.equals(secondImage, that.secondImage) &&
                Objects.equals(secondImageAltText, that.secondImageAltText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstImage, firstImageAltText, secondImage, secondImageAltText);
    }
}
