package tinotendachingwena.website.models.experiences;

import java.io.Serializable;

public class ProjectLink implements Serializable {

    private String label;
    private String url;
    private String urlText;

    public ProjectLink(String label, String url, String urlText) {
        this.label = label;
        this.url = url;
        this.urlText = urlText;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrlText() {
        return urlText;
    }

    public void setUrlText(String urlText) {
        this.urlText = urlText;
    }
}
