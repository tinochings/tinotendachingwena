import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Contact from '@/app/en/contact/page';
import { act } from 'react';

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('API Network Error Tests', () => {
    fetchMock.enableMocks();

    it ("Network Error En", async () => {
        fetchMock.mockReject(new Error(""))
        act(()=> {
            render( <Contact language='en'/> );
        })
        
        await instantiateContactFields('en');
        let submitButton = await screen.findByText("SEND");
        expect(submitButton).toBeInTheDocument();
        expect(fireEvent.click(submitButton)).toBe(true);
        expect(screen.getByText("Sending your message :) ...")).toBeInTheDocument();
        expect(screen.queryByAltText("Notification Icon")).toBeNull();

        //received response
        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText(`A network error was encountered. Check your internet connectivity and try again.`)).toBeInTheDocument();
        }));
    });

    it ("Network Error Sn", async () => {
        fetchMock.mockReject(new Error(""));
        render( <Contact language='sn'/> );
        await instantiateContactFields('sn');
        let submitButton = await screen.findByText("SEND");
        expect(submitButton).toBeInTheDocument();
        expect(fireEvent.click(submitButton)).toBe(true);
        expect(screen.getByText("Sending your message :) ...")).toBeInTheDocument();
        expect(screen.queryByAltText("Notification Icon")).toBeNull();

        //received response
        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText("Paitika dambudziko nemasaisai. Tarisai kuti masaisai enyu ari kushanda zvakanaka uye zve muedze zvakare.")).toBeInTheDocument();
        }));
    });
})

describe("Valid contact form posts", () =>{
    fetchMock.enableMocks();

    it("No CSRF cookie set", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({headerText: "s", bodyText:"Hello", statusCode : "403", positiveActionButton : "", negativeActionButton: ""}), { status: 403})
        const spy = jest.spyOn(window, 'fetch');
        render(<Contact />);
        await instantiateContactFields('en');
        let submitButton = await screen.findByText("SEND");
        expect(submitButton).toBeInTheDocument();
        expect(fireEvent.click(submitButton)).toBe(true);
        let fetchParameter = spy.mock.calls[0][1];
        expect(fetchParameter.headers['X-XSRF-TOKEN']).toBe("")

        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText("Hello")).toBeInTheDocument();
        }));
    })

    it("CSRF Cookie set", async () => {
        const spy = jest.spyOn(window, 'fetch');
        jest.spyOn(document, 'cookie', 'get').mockReturnValueOnce("XSRF-TOKEN=TOKEN");
        fetchMock.mockResponseOnce(JSON.stringify({message : "Message Sent"}));
        render(<Contact />);
        await instantiateContactFields('en');
        let submitButton = await screen.findByText("SEND");
        expect(submitButton).toBeInTheDocument();
        expect(fireEvent.click(submitButton)).toBe(true);
        
        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText("Message Sent")).toBeInTheDocument();
        }));

        let fetchParameter = spy.mock.calls[0][1];
        expect(fetchParameter.headers['X-XSRF-TOKEN']).toBe("TOKEN");
        expect(fetchParameter.headers['Accept']).toBe("application/json");
        expect(fetchParameter.method).toBe("POST");
    })

    it("Multiple cookies", async () => {
        jest.spyOn(document, 'cookie', 'get').mockReturnValueOnce("username=pp; a=b; b=c; multiple=c; ss=ss; XSRF-TOKEN=IAMTOKEN;")
        const spy = jest.spyOn(window, 'fetch');
        fetchMock.mockResponseOnce(JSON.stringify({message : "Message Sent"}));
        render(<Contact />);
        await instantiateContactFields('en');
        let submitButton = await screen.findByText("SEND");
        expect(submitButton).toBeInTheDocument();
        expect(fireEvent.click(submitButton)).toBe(true);
        
        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText("Message Sent")).toBeInTheDocument();
        }));
        
        let fetchParameter = spy.mock.calls[0][1];
        expect(fetchParameter.headers['X-XSRF-TOKEN']).toBe("IAMTOKEN");
        expect(fetchParameter.headers['Accept']).toBe("application/json");
        expect(fetchParameter.method).toBe("POST");
    })
})

describe("Integrated functionality", () => {
    fetchMock.enableMocks()
    it("Intergrated test", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({message : "Message Sent"}));
        render(<Contact />);
        await instantiateContactFields('en');

        let name = await screen.findByLabelText("Name")
        let email = await screen.findByLabelText("Email")
        let message = await screen.findByLabelText("Message");
        name.value = "Changed now";
        email.value = "change@ss.com";
        message.value = "message and this";

        let submitButton = await screen.findByText("SEND");
        expect(fireEvent.click(submitButton)).toBe(true);

        await (waitFor(() => {
            expect(screen.getByAltText("Notification Icon")).toBeInTheDocument();
            expect(screen.getByAltText("Close Notification container")).toBeInTheDocument();
            expect(screen.getByText("Message Sent")).toBeInTheDocument();
        }));

        let cancelImage = await screen.findByAltText("Close Notification container");
        fireEvent.click(cancelImage);

        await (waitFor(() => {
            expect(screen.queryByAltText("Notification Icon")).not.toBeInTheDocument();
            expect(screen.queryByAltText("Close Notification container")).not.toBeInTheDocument();
            expect(screen.queryByText("Message Sent")).not.toBeInTheDocument();
            expect(screen.queryByText("Sending your message :) ...")).not.toBeInTheDocument();
        }));
    })
})

async function instantiateContactFields(language){
    let name = await screen.findByLabelText(language === 'en' ? "Name" : 'Zita')
    let email = await screen.findByLabelText("Email")
    let message = await screen.findByLabelText(language === 'en' ? "Message" : 'Mashoko Ekutumira')

    name.value = "Ssss";
    email.value = "ss@ss.com";
    message.value = "message"
}