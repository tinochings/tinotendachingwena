import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Experiences from '@/app/en/experiences/page';
import loaderStyle from '@/utilities/components/miscellaneous/loaders.module.css'
import alertStyle from '@/utilities/components/miscellaneous/alert.module.css';
import { sectionDataItem1 } from '@/utilities/tests/experiences';

beforeEach(() => {
    fetchMock.resetMocks()
});

describe("Network failure", () => {
    fetchMock.enableMocks();

    it("No network Loading -> Alert", async () => {
        fetchMock.mockReject(new Error());
        const {container} = render(<Experiences/>);
        expect(container.getElementsByClassName(loaderStyle.skeleton).length).toBeGreaterThan(0);

        await (waitFor(() => {
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).firstChild.firstChild.textContent).toBe("Reload Page");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).firstChild.firstChild.href).toContain("/api/experiences/en");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).childNodes[1].firstChild.textContent).toBe("Return Home");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).childNodes[1].firstChild.href).toContain("/en/");
            expect(container.getElementsByClassName(alertStyle.bodyText).item(0).textContent).toBe("Failed to retrieve the content for this webpage from the server due to error code: No internet connection");
        }));
    })

    it("No network Loading -> Alert Sn", async () => {
        fetchMock.mockReject(new Error());
        const {container} = render(<Experiences language="sn"/>);
        expect(container.getElementsByClassName(loaderStyle.skeleton).length).toBeGreaterThan(0);

        await (waitFor(() => {
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).firstChild.firstChild.textContent).toBe("Turunura zvakare");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).firstChild.firstChild.href).toContain("/api/experiences/sn");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).childNodes[1].firstChild.textContent).toBe("Dzokerai pekutanga");
            expect(container.getElementsByClassName(alertStyle.alertAction).item(0).childNodes[1].firstChild.href).toContain("/sn/");
            expect(container.getElementsByClassName(alertStyle.bodyText).item(0).textContent).toBe("Ruzivo runoshandiswa pachiratidzo ichi chewebusaiti chakonewa kuturikwa nechikonzero chinotevera: No internet connection");
        }));
    })
});

describe("Staus error", () => {
    fetchMock.enableMocks();
    it("Error 400", async () => {
        fetchMock.mockResponseOnce("{}", {status : 400});
        render(<Experiences/>);

        await (waitFor(() => {
            expect(screen.getByText("Reload Page")).toBeInTheDocument();
            expect(screen.getByText("Return Home")).toBeInTheDocument();
            expect(screen.getByText("An error occurred whilst trying to receive experiences information. The error status code observed is: 400")).toBeInTheDocument();
        }))
    })

    it("Error 404", async () => {
        fetchMock.mockResponseOnce("{}", {status : 404});
        render(<Experiences/>);

        await (waitFor(() => {
            expect(screen.getByText("Reload Page")).toBeInTheDocument();
            expect(screen.getByText("Return Home")).toBeInTheDocument();
            expect(screen.getByText("An error occurred whilst trying to receive experiences information. The error status code observed is: 404")).toBeInTheDocument();
        }))
    })

    it("Error 400 SN", async () => {
        fetchMock.mockResponseOnce("{}", {status : 400});
        render(<Experiences language="sn"/>);

        await (waitFor(() => {
            expect(screen.getByText("Turunura zvakare")).toBeInTheDocument();
            expect(screen.getByText("Dzokerai pekutanga")).toBeInTheDocument();
            expect(screen.getByText("Webusaiti haina kukwanisa kuturuna ruzivo rwenhoroondo nechikonzero chinotevera: 400")).toBeInTheDocument();
        }))
    })


});

describe("Successful retrieval", () => {
    fetchMock.enableMocks();
    it("Status ok", async () => {
        fetchMock.mockResponse(JSON.stringify([sectionDataItem1]), {status: 200});
        render(<Experiences/>);

        await (waitFor(() => {
            expect(screen.getByText(sectionDataItem1.projectName)).toBeInTheDocument();
            expect(screen.getByText(sectionDataItem1.projectAbout)).toBeInTheDocument();
            expect(screen.getByText(sectionDataItem1.projectDescription)).toBeInTheDocument();
            expect(sectionDataItem1.projectImages.length).toBe(2);
            //project image 0
            expect(screen.getByAltText(sectionDataItem1.projectImages[0].firstImageAltText)).toBeInTheDocument();
            expect(screen.getByAltText(sectionDataItem1.projectImages[0].secondImageAltText)).toBeInTheDocument();
            //project image 1
            expect(screen.getByAltText(sectionDataItem1.projectImages[1].firstImageAltText)).toBeInTheDocument();
            expect(screen.getByAltText(sectionDataItem1.projectImages[1].secondImageAltText)).toBeInTheDocument();
            //link
            expect(screen.getByText(sectionDataItem1.projectLink[0].urlText)).toBeInTheDocument();
            expect(screen.getByLabelText(sectionDataItem1.projectLink[0].label)).toBeInTheDocument();
        }))
    })
});