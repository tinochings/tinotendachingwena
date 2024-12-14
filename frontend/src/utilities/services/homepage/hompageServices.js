import Cvitem, { LinkItem } from "@/utilities/models/cvitem";

/**
 * 
 * @returns instantiated Delta Beverages CV ITEM 
 */
export function deltaBeveragesCvItem() {
    let deltaBeverages = new Cvitem("08/2024 - Current", "Delta Beverages - Transport Services", "I.C.T Specialist",
        [], ['SAP', 'Resource Management', 'Systems Integration']);

    deltaBeverages.description = `Leverage my expertise in software development to provide acute insight 
    in integrating new software systems into Delta's technological ecosystem. Provide technical software support for applications such as
    SAP. Maintain and manage I.T resources physiclly and remotely for all Delta Transport Services branches. Facilitating the increase
    of computer literacy within the organization by the provision of ICT training and workshops `;

    return deltaBeverages;
}

/**
 * 
 * @returns instantiated Tiis Glam Studio CV ITEM 
 */
export function tiisGlamStudioCvItem() {
    let tiisGlamStudio = new Cvitem("01/2024 - 07/2024", "Tiis Glam Studio", "Software Engineer - Frontend & Backend",
        [], ['UML', 'Java', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot', 'Jetpack Compose', 'Kotlin & Android']);

    tiisGlamStudio.description = `Designed algorithms, system design, system protocols with UML and utilised Jira for project management and maintenance.
    Constructed website front-end user 
    interface using CSS, HTML5, JavaScript, Thymleaf and Bootstrap. Constructed Android application primarily with Kotlin. Implemented Android 
    user-interface using 100% Jetpack Compose with a MVVM (Model-View-View-Model). Implement Spring Boot for backend with PostgreSQL database,
    thread safety and cryptography for communication with android client. Implemented hybrid encryption. RSA was used for end-to-end encryption.
     AES Galois/Counter mode was used for symmetric encryption.`;

    return tiisGlamStudio;
}

/**
 * 
 * @returns instantiated Tiis Glam Studio CV ITEM 
 */
export function zvevatsungaSteelAndPlumbingCvItem() {
    let zvevatsunga = new Cvitem("08/2023 - 03/2024", "Zvevatsunga Steel & Plumbing", "WEB DEVELOPER - FRONT-END & BACK END",
        [], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    zvevatsunga.description = `Construct front-end user interface using CSS, HTML5, JavaScript, and Bootstrap.  Implement Spring Boot for 
    backend with PostgreSQL database. Execute thorough testing procedures, including unit tests and system tests, to identify
    and rectify potential issues and ensure system's reliability. Implement caching mechanisms to optimize data retrieval, reducing latency and
    enhancing overall server response times`;

    return zvevatsunga;
}

/**
 * 
 * @returns instantiated Trin Media CV ITEM 
 */
export function trinMediaCvItem() {
    let trinMedia = new Cvitem("05/2023 - 07/2023", "Trin Media Consultancy Agency", "SOFTWARE PROGRAMMER",
        [], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    trinMedia.description = `Construct front-end user interface using CSS, HTML5, JavaScript, and Bootstrap.  Implement Spring Boot for 
    backend with PostgreSQL database. Implemented coding practices to guarantee cross-browser compatibility, optimizingthe user experience 
    across various web platforms. Implemented JavaScript to create interactive features, fostering user engagement and providing a dynamic 
    browsing experience. Conducted rigorous code reviews and adhered to best practices, maintaining high standards of code quality and readability`;

    return trinMedia;
}

/**
 * 
 * @returns instantiated Poets Kingdom CV ITEM 
 */
export function poetsKingdomCvItem() {
    let poetsKingdomLinkItem = new LinkItem('https://github.com/tinochings/PoetsKingdom', 'Poets Kingdom Source Code', '/miscellaneous/link.svg')
    let poetsKingdom = new Cvitem("05/2023 - Ongoing", "Open Source Project", "Android Developer",
        [poetsKingdomLinkItem], ['XML','MVVM', 'Kotlin', 'Android', 'Jetpack Compose']);

    poetsKingdom.description = `Hey! why not check it out yourself? ;) Implemented user interface using Jetpack Compose (Approx 90%) and XML (Approx 10%). 
    Incorporates multi-threading using Kotlin coroutines to prevent main thread blocking, run long intensive tasks and ensure a seamless user experience.
    Incorporates Model-View-View-Model (MVVM) design pattern to ensure testability in isolation and ensures a separation of business and user interface logic.`;

    return poetsKingdom;
}