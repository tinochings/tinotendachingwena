import { Row, Col, Carousel } from "react-bootstrap";
import { CarouselNavigationIcon } from "@/utilities/components/experiences/experiencesComponents";

export const ViewState = { DefaultScreen: Symbol(0), LoadingScreen: Symbol(1), Alert: Symbol(2) };
export const displayState = { DisplayState: ViewState.LoadingScreen, AlertState: { headerText: "", bodyText: "" } };

/**
 * 
 * @param {*} setCurrentDisplayState 
 * @param {*} setSectionDataList 
 * @param {*} displayState 
 */
export function fetchSectionData(setCurrentDisplayState, setSectionDataList, displayState, languageResourceObject) {
    const sectionDataListResponse = getAllSetionData(languageResourceObject);
    sectionDataListResponse.then((sectionData) => {
        if (Array.isArray(sectionData)) {
            if (sectionData.length === 0) {

            }
            else {
                setSectionDataList(sectionData);
                setCurrentDisplayState({ ...displayState, DisplayState: ViewState.DefaultScreen });
            }
        } else if (typeof sectionData === "object") {
            setCurrentDisplayState({ DisplayState: ViewState.Alert, AlertState: { headerText: sectionData.headerText, bodyText: sectionData.bodyText } });
        }
    })
}

/**
 * 
 * @returns an array of JSON Objects if network call was successful else -1 is returned
 */
async function getAllSetionData(languageResourceObject) {
    let responseStatus = 500;
    try {
        const response = await fetch("http://localhost:8080/api/experiences/");
        if (response.status === 200) {
            const responseJson = await response.json();
            return responseJson;
        }
        responseStatus = response.status;
    } catch (error) {
        return new Promise((resolve, _reject) => resolve({headerText: languageResourceObject.networkErrorHeader, bodyText : `${languageResourceObject.networkError} ${responseStatus}`}));
    }
}

/**
 * Maps all items in the sectionData array into an array of section JSX items, each sectionData
 * item is as follows:
 * {
 *  projectId : String
 *  projectName : String,
 *  projectImages : Array<JSON OBJECT> JSON OBJECT = { firstImage : String, secondImage:String, firstImageAltText : String, secondImageAltText : String}
 *  projectAbout : String,
 *  projectDescription : String,
 *  projectLink : JSON OBJECT JSON OBJECT = { url, label, urlText}
 * }
 * @param {*} sectionData array of section information used for experiences
 * @returns 
 */
export function sectionDataToExperienceSections(sectionData = [], experienceStyle) {

    return sectionData.length <= 0 ? [] : sectionData.map((dataItem, index) => (
        <section key={index} id={dataItem.projectId} className="container">
            <div className={`${experienceStyle.projectItem}`}>
                <h1>{dataItem.projectName}</h1>
                {dataItem.projectImages.length > 0 ?
                    <Carousel interval={null} prevIcon={<CarouselNavigationIcon isPreviousIcon={true} />} nextIcon={<CarouselNavigationIcon isPreviousIcon={false} />} className={`${experienceStyle.spacing}`}>
                        {
                            dataItem.projectImages.map((imageItem, imageItemIndex) => (
                                <Carousel.Item key={`ImageItem${imageItemIndex}`}>
                                    <Row className={`${experienceStyle.spacing} ${experienceStyle.imageRow}`}>
                                        <Col className="vertical-centre">
                                            <img loading={imageItemIndex > 0 ? "lazy" : "eager"} className={`${experienceStyle.pictures}`} src={imageItem.firstImage} alt={imageItem.firstImageAltText}></img>
                                        </Col>
                                        <Col className="vertical-centre">
                                            {
                                                typeof imageItem.secondImage === "string" && imageItem.secondImage.length > 0 ? <img className={`${experienceStyle.pictures}`}
                                                    src={imageItem.secondImage} alt={imageItem.secondImageAltText} loading={imageItemIndex > 0 ? "lazy" : "eager"}></img> : <></>
                                            }
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel> : <></>}
                <p className={`${experienceStyle.spacing} ${experienceStyle.application_about}`}>{dataItem.projectAbout}</p>
                <p className={`${experienceStyle.spacing}`}>{dataItem.projectDescription}</p>
                <a aria-label={dataItem.projectLink.label} href={dataItem.projectLink.url} target="_blank">{dataItem.projectLink.urlText}</a>
            </div>
        </section>
    ));
}