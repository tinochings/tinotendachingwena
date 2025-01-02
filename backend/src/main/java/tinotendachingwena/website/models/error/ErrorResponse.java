package tinotendachingwena.website.models.error;

import jakarta.validation.constraints.NotBlank;

public class ErrorResponse {

    @NotBlank
    private String headerText;
    @NotBlank
    private String bodyText;
    @NotBlank
    private String statusCode;
    private String positiveButtonAction;
    private String negativeButtonAction;

    public ErrorResponse(){

    }

    public ErrorResponse(String headerText, String bodyText, String statusCode) {
        this.headerText = headerText;
        this.bodyText = bodyText;
        this.statusCode = statusCode;
        positiveButtonAction = "";
        negativeButtonAction = "";
    }

    public String getHeaderText() {
        return headerText;
    }

    public void setHeaderText(String headerText) {
        this.headerText = headerText;
    }

    public String getBodyText() {
        return bodyText;
    }

    public void setBodyText(String bodyText) {
        this.bodyText = bodyText;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getPositiveButtonAction() {
        return positiveButtonAction;
    }

    public void setPositiveButtonAction(String positiveButtonAction) {
        this.positiveButtonAction = positiveButtonAction;
    }

    public String getNegativeButtonAction() {
        return negativeButtonAction;
    }

    public void setNegativeButtonAction(String negativeButtonAction) {
        this.negativeButtonAction = negativeButtonAction;
    }
}
