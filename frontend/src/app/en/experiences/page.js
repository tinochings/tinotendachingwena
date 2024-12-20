"use client"
import { useEffect, useState } from "react";
import { displayState, ViewState, fetchSectionData } from "@/utilities/services/experiences/service";
import experienceStyle from './experiences.module.css';
import { sectionDataToExperienceSections } from "@/utilities/services/experiences/service";

/**
 * I could have made this entire app purely in Javascript with Classes, Models, Services and so on and so forth but you would
 * not be able to see an inner insight to my level of expertise. Therefore I have deliberately tied information in this page
 * to the server to showcase just a little bit of how I think in terms of client server communication
 * @param {} param0 
 * @returns 
 */
export default function Experiences({ language = "en" }) {
    const [currentDisplayState, setCurrentDisplayState] = useState(displayState);
    const [sectionDataList, setSectionDataList] = useState([]);

    useEffect(() => {

    }, [sectionDataList]);

    return (
        <ViewStateToDisplay displayState={currentDisplayState.DisplayState} sectionData={sectionDataList} />
    );
}

/**
 * 
 * @param {*} sectionData the data retrieved from the server 
 * @returns 
 */
function ExperienceSection({ sectionData = [] }) {

    return (
        <>
            {
                sectionDataToExperienceSections(sectionData, experienceStyle)
            }
        </>
    );
}

/**
 * Displays the current view state
 * @param {*} param0 
 * @returns 
 */
function ViewStateToDisplay({ displayState = ViewState.LoadingScreen, sectionData = [] }) {

    switch (displayState) {
        case ViewState.DefaultScreen:
            return (
                <ExperienceSection sectionData={sectionData} />
            );
        case ViewState.LoadingScreen:
            return (
                <ExperienceSection sectionData={sectionData} />
            );
        case ViewState.Alert:
            return (
                <></>
            );
    }

}