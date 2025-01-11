package tinotendachingwena.website.controllers.controlleradvice;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import tinotendachingwena.website.models.error.ErrorResponse;
import tinotendachingwena.website.utilities.StringUtility;

@ControllerAdvice
public class ErrorControllerAdvice extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  @NonNull HttpHeaders headers,
                                                                  @NonNull HttpStatusCode status,
                                                                  @NonNull WebRequest request) {
        BindingResult bindingResult = ex.getBindingResult();
        StringBuilder stringBuilder = new StringBuilder();
        for (FieldError error : bindingResult.getFieldErrors()) {
            stringBuilder.append(error.getDefaultMessage()).append("\n");
        }

        ErrorResponse errorResponse = new ErrorResponse(StringUtility.invalidMethodResponseHeader, stringBuilder.toString(),
                String.valueOf(HttpStatus.BAD_REQUEST.value()));
        return handleExceptionInternal(ex, errorResponse, headers, status, request);
    }
}
