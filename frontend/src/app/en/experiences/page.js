"use client"
import { useEffect, useState } from "react";
import { displayState, ViewState, fetchSectionData } from "@/utilities/services/experiences/service";
import experienceStyle from './experiences.module.css';
import { sectionDataToExperienceSections } from "@/utilities/services/experiences/service";
import { SkeletonLoadingAnimation } from "@/utilities/components/miscellaneous/loading";
import AlertBox from "@/utilities/components/miscellaneous/alert";
import { experienceResource, metaDataResourceExperiences } from "@/utilities/resources/en";
import { experienceResourceSn } from "@/utilities/resources/sn";
import MetaData from "@/utilities/components/MetaData";
import {ImageViewer } from "@/utilities/components/experiences/experiencesComponents";
import { defaultImageObject } from "@/utilities/services/experiences/service";

/**
 * I could have made this entire app purely in Javascript with Classes, Models, Services and so on and so forth but you would
 * not be able to see an inner insight to my level of expertise. Therefore I have deliberately tied information in this page
 * to the server to showcase just a little bit of how I think in terms of client server communication
 * @param {} param0 
 * @returns 
 */
export default function Experiences({ language = "en" }) {
    const languageResourceObject = language === "en" ? {...experienceResource, lang : "en"} : {...experienceResourceSn, lang:"sn"};
    const [currentDisplayState, setCurrentDisplayState] = useState(displayState);
    const [sectionDataList, setSectionDataList] = useState([]);

    useEffect(() => {
        fetchSectionData(setCurrentDisplayState, setSectionDataList, displayState, languageResourceObject)
    }, []);

    return (
        <>
        <MetaData title={metaDataResourceExperiences.title} description={metaDataResourceExperiences.description}/>
        <ViewStateToDisplay currentDisplayState={currentDisplayState} sectionData={sectionDataList} languageObject={languageResourceObject} />
        </>
    );
}

/**
 * 
 * @param {*} sectionData the data retrieved from the server 
 * @returns 
 */
function ExperienceSection({ sectionData = [] }) {
    const [shouldDisplayImage, setShouldDisplayImage] = useState(false);
    const [imageViewObject, setImageViewObject] = useState(defaultImageObject)

    const onCancelButtonClicked = () => {
        setShouldDisplayImage(false);
        setImageViewObject({...imageViewObject, imageUrl: "", alt: ""})
    }

    const onImageClicked = (imageUrlText, altText) => {
        setShouldDisplayImage(true);
        setImageViewObject({...imageViewObject, imageUrl: imageUrlText, alt: altText, onCloseImageView: onCancelButtonClicked})
    }

    return (
        <>
            {
                sectionDataToExperienceSections(sectionData, experienceStyle, onImageClicked)
                
            }
            {shouldDisplayImage === true ? <ImageViewer imageViewObject={imageViewObject} /> : <> </>}
        </>
    );
}

/**
 * Displays the current view state
 * @param {*} param0 
 * @returns 
 */
function ViewStateToDisplay({ currentDisplayState, sectionData = [], languageObject }) {

    switch (currentDisplayState.DisplayState) {
        case ViewState.DefaultScreen:
            return (
                <ExperienceSection sectionData={sectionData} />
            );
        case ViewState.LoadingScreen:
            return (
                <>
                <SkeletonLoadingAnimation experienceStyle={experienceStyle}></SkeletonLoadingAnimation>
                <SkeletonLoadingAnimation experienceStyle={experienceStyle}></SkeletonLoadingAnimation>
                </>
            );
        case ViewState.Alert:
            return (
                <AlertBox languageObject={languageObject} onCloseAlert={() => {}} headerText={currentDisplayState.AlertState.headerText} bodyText={currentDisplayState.AlertState.bodyText}/>
            );
        default : 
            return (
                <AlertBox onCloseAlert={() => {}} language={languageObject} headerText={currentDisplayState.AlertState.headerText} bodyText={currentDisplayState.AlertState.bodyText}/>
            );    
    }

}