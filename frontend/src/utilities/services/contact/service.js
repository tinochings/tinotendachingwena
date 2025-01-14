export const FormStates = { SENDING: Symbol(0), SENT: Symbol(1), INPUT: Symbol(2) };

export function submitContactForm(name, email, message, setFormState, setToggleNotification, setNotificationText, languageResourceObject) {
    let requestBody = JSON.stringify({ name: name, email: email, message: message });
    setFormState(FormStates.SENDING);
    setToggleNotification(false);
    let serverResponse = postRequest(requestBody, getCSRFToken(), languageResourceObject);

    serverResponse.then((response) => {
        switch (response.state) {
            case FormStates.SENT: {
                setNotificationText(response.textResponse);
                setToggleNotification(true);
                setFormState(FormStates.INPUT);
                return;
            }
            default: {
                setNotificationText(languageResourceObject.failedNetworkNotification);
                setToggleNotification(true);
                setFormState(FormStates.INPUT);
                return;
            }
        }
    });
}

/**
 * If there is a validation error this method receives an ErrorResponse object : 
 * {
 * headerText : String (NON NULL),
 * bodyText : String (NON NULL),
 * statusCode : String (NON NULL),
 * positiveButtonAction : String (Nullable),
 * negativeButtonAction : String (Nullable)
 * }
 * @param {*} requestBody 
 * @param {*} csrfToken 
 * @returns an object with structure: {state : FormStates, textResponse : String }
 */
async function postRequest(requestBody, csrfToken, languageResourceObject) {
    const headerObject = {
        headers: { 'X-XSRF-TOKEN': csrfToken, 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
        body: requestBody
    };

    try {
        const request = await fetch("/api/contact/form", headerObject);
        let response = await request.json();
        if (request.ok){
            return new Promise((resolve) => (resolve({ state: FormStates.SENT, textResponse: response.message })));
        } else {
            return new Promise((resolve) => (resolve({ state: FormStates.SENT, textResponse: response.bodyText})));
        }
    } catch (error) {
        return new Promise((resolve) => resolve({ state: FormStates.SENT, textResponse: languageResourceObject.networkFailure }));
    }
}

/**
 * 
 * @returns CSRF token as text or a blank screen indicating an error
 */
function getCSRFToken() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let splitCookieArray = decodedCookie.split(';');

    for (let i = 0; i < splitCookieArray.length; i++) {
        let cookie = splitCookieArray[i];

        if (cookie.includes('XSRF-TOKEN=')) {
            let splitCookie = cookie.split('=');
            return splitCookie[1];
        }
    }
    return "";
}