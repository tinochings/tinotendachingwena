'use client';
import styles from './alert.module.css'

export default function AlertBox({ onCloseAlert, headerText, bodyText, languageObject }){
    return (
        <>
        <OverLay onCloseAlert={onCloseAlert}></OverLay>
        <div className={styles.errorAlert}>
            <div className={styles.cancelContainer}>
                <img onClick={(e) => {e.preventDefault(); onCloseAlert();}} src="/images/miscellaneous/cancel.svg" alt="Close alert container"></img>
            </div>
            <div className={styles.headerTextCont}>
                <h1 className={styles.headerText}>{headerText}</h1>
            </div>
            <div className={styles.bodyTextContainer}>
                <p className={styles.bodyText}>
                    {bodyText}
                </p>
            </div>
            <div className={styles.alertAction}>
                <div>
                    <a aria-label='Reloads experience page' href={languageObject.lang === 'en' ? '/en/experiences' : '/sn/experiences'}>{languageObject.alertLeft}</a>
                </div>
                <div>
                    <a aria-label='Navigates to the home page' href={languageObject.lang === 'en' ? '/en/' : '/sn/'}>{languageObject.alertRight}</a>
                </div>
            </div>
        </div>
        
        </>
    );
}

function OverLay({onCloseAlert}){
    return (
        <div onClick={(e) => {e.preventDefault(); onCloseAlert();}} className={styles.overlay}></div>
    )
}