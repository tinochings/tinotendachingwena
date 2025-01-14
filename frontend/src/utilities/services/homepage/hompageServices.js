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
    SAP. Maintain and manage I.T resources physically and remotely for all Delta Transport Services branches. Facilitating the increase
    of computer literacy within the organization by the provision of ICT training and workshops `;

    return deltaBeverages;
}

/**
 * 
 * @returns instantiated Delta Beverages CV ITEM 
 */
export function deltaBeveragesCvItemSn() {
    let deltaBeverages = new Cvitem("08/2024 - Current", "Delta Beverages - Transport Services", "I.C.T Specialist",
        [], ['SAP', 'Resource Management', 'Systems Integration']);

    deltaBeverages.description = `Ndaka shandisa hunyanzvi hwangu mukugadzira mashandamurunhare kuti ndibatsire Delta mukubatanidza 
    mashandamurunhare akasiyana siyana ave panzvimbo imwe chete. Ndaka batsira vanhu vazhinji mukushandisa mashandamurunhare akaita
    seSAP. Ndai chengeta uye neku gadzira macomputer eDelta Transport Services. Ndai batsira vanhu mukuwedzera rudzidzo rwavo mukuziva
    zvemacomputer kubudikidza nerudidzo rweICT uye nemisangano ane chinangwa chekudzidza nezve macomputer`;

    return deltaBeverages;
}

/**
 * 
 * @returns instantiated Tiis Glam Studio CV ITEM 
 */
export function tiisGlamStudioCvItem() {
    let linkItem = new LinkItem('/en/experiences#tiisglamstudio', 'Tiis Glam Experience', '/images/miscellaneous/link.svg');
    let tiisGlamStudio = new Cvitem("01/2024 - 07/2024", "Tiis Glam Studio", "Software Engineer - Frontend & Backend",
        [linkItem], ['UML', 'Java', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot', 'Jetpack Compose', 'Kotlin & Android']);

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
export function tiisGlamStudioCvItemSn() {
    let linkItem = new LinkItem('/sn/experiences#tiisglamstudio', 'Tiis Glam Experience', '/images/miscellaneous/link.svg');
    let tiisGlamStudio = new Cvitem("01/2024 - 07/2024", "Tiis Glam Studio", "Software Engineer - Frontend & Backend",
        [linkItem], ['UML', 'Java', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot', 'Jetpack Compose', 'Kotlin & Android']);

    tiisGlamStudio.description = `Ndaka Designed algorithms, system design, system protocols with UML and utilised Jira for project management and maintenance.
    Ndaka gadzira chiratidzo chewebusaiti iyi neCSS, HTML5, JavaScript, Thymleaf and Bootstrap. Ndaka gadzira shandamurunhare inoshanda muAndroid chete neKotlin.
    Ndaka gadzira chiratidzo cheshandamurunhare inoshanda muAndroid ndichi shandisa 100% Jetpack Compose ndichi shandisa MVVM (Model-View-View-Model).
    Ndaka gadzira sevha neSpring Boot, ndichishandisa PostgreSQL kuchengeta ruzivo rwekambani, ndichi tsigira thread safety uye zve necryptography kuti 
    shandamurunhare yeAndroid ikwanise nesevha zvikwanise kutaura pasina anopindira. Implemented hybrid encryption. RSA was used for end-to-end encryption.
    AES Galois/Counter mode was used for symmetric encryption.`;

    return tiisGlamStudio;
}

/**
 * 
 * @returns instantiated Zvevatsunga Steel & Plumbing CV ITEM 
 */
export function zvevatsungaSteelAndPlumbingCvItem() {
    let linkItem = new LinkItem('/en/experiences#zvevatsunga', 'Zvevatsunga Experience', '/images/miscellaneous/link.svg');
    let zvevatsunga = new Cvitem("08/2023 - 03/2024", "Zvevatsunga Steel & Plumbing", "WEB DEVELOPER - FRONT-END & BACK END",
        [linkItem], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    zvevatsunga.description = `Construct front-end user interface using CSS, HTML5, JavaScript, and Bootstrap.  Implement Spring Boot for 
    backend with PostgreSQL database. Execute thorough testing procedures, including unit tests and system tests, to identify
    and rectify potential issues and ensure system's reliability. Implement caching mechanisms to optimize data retrieval, reducing latency and
    enhancing overall server response times`;

    return zvevatsunga;
}

/**
 * 
 * @returns instantiated Zvevatsunga Steel & Plumbing CV ITEM 
 */
export function zvevatsungaSteelAndPlumbingCvItemSn() {
    let linkItem = new LinkItem('/sn/experiences#zvevatsunga', 'Zvevatsunga Experience', '/images/miscellaneous/link.svg');
    let zvevatsunga = new Cvitem("08/2023 - 03/2024", "Zvevatsunga Steel & Plumbing", "WEB DEVELOPER - FRONT-END & BACK END",
        [linkItem], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    zvevatsunga.description = `Ndaka gadzira chiratidzo chewebusaiti neCSS, HTML5, JavaScript, and Bootstrap. Ndaka gadzira sevha neSpring Boot
    uye zve ndichishandisa PostgreSQL kuchengeta ruzivo rwekambani. Ndaka tsvakurudza magadziriro ewubsaiti iyi ndichi tsvaga pasina kugadzirwa
    zvakanaka. Ndaka tsvakurudza webusaiti iyi ndichi shandisa mhando dzekutsvakurudza dzinoti unit tests uye zve system tests. Panenge paka potseka
    ndaipa gadzirisa. Ndaka shandisa macaching mechanism kuti ruzivo rwekambani ukwanise kuwanikwa zvinyore nyore uye zve nekuchimbidza`;

    return zvevatsunga;
}

/**
 * 
 * @returns instantiated Trin Media CV ITEM 
 */
export function trinMediaCvItem() {
    let linkItem = new LinkItem('/en/experiences#trinmedia', 'Trin Media Experience', '/images/miscellaneous/link.svg');
    let trinMedia = new Cvitem("05/2023 - 07/2023", "Trin Media Consultancy Agency", "SOFTWARE PROGRAMMER",
        [linkItem], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    trinMedia.description = `Construct front-end user interface using CSS, HTML5, JavaScript, and Bootstrap.  Implement Spring Boot for 
    backend with PostgreSQL database. Implemented coding practices to guarantee cross-browser compatibility, optimizingthe user experience 
    across various web platforms. Implemented JavaScript to create interactive features, fostering user engagement and providing a dynamic 
    browsing experience. Conducted rigorous code reviews and adhered to best practices, maintaining high standards of code quality and readability`;

    return trinMedia;
}

/**
 * 
 * @returns instantiated Trin Media CV ITEM 
 */
export function trinMediaCvItemSn() {
    let linkItem = new LinkItem('/sn/experiences#trinmedia', 'Trin Media Experience', '/images/miscellaneous/link.svg');
    let trinMedia = new Cvitem("05/2023 - 07/2023", "Trin Media Consultancy Agency", "SOFTWARE PROGRAMMER",
        [linkItem], ['Java', 'Bootstrap', 'Thymeleaf', 'HTML & CSS', 'JavaScript', 'Spring Boot']);

    trinMedia.description = `Ndaka gadzira chiratidzo chewebusaiti iyi neCSS, HTML5, JavaScript, and Bootstrap. Ndaka gadzira sevha neSpring Boot
    uye zve ndichishandisa PostgreSQL kuchengeta ruzivo rwekambani. Ndaka gadzira webusaiti iyi kuti ikwanise kushanda pane mashandamurunhare
    akawanda. Ndaka shandisa JavaScript kuti webusaiti iyi ishandisike zvakarerekana. Ndaigara ndichi nzvera magadziriro ewbusaiti iyi kuti ndichi gadzirisa
    pakapotseka uye zve kuti webusaiti iyi ive yakagadzirwa nemhando yepamusoro soro.`;

    return trinMedia;
}

/**
 * 
 * @returns instantiated Poets Kingdom CV ITEM 
 */
export function poetsKingdomCvItem() {
    let linkItem = new LinkItem('/en/experiences#poetskingdom', 'Poets Kingdom Experience', '/images/miscellaneous/link.svg');
    let poetsKingdomLinkItem = new LinkItem('https://github.com/tinochings/PoetsKingdom', 'Poets Kingdom Source Code', '/images/miscellaneous/link.svg')
    let poetsKingdom = new Cvitem("05/2023 - Ongoing", "Open Source Project", "Android Developer",
        [poetsKingdomLinkItem, linkItem], ['XML','MVVM', 'Kotlin', 'Android', 'Jetpack Compose']);

    poetsKingdom.description = `Hey! why not check it out yourself? ;) Implemented user interface using Jetpack Compose (Approx 90%) and XML (Approx 10%). 
    Incorporates multi-threading using Kotlin coroutines to prevent main thread blocking, run long intensive tasks and ensure a seamless user experience.
    Incorporates Model-View-View-Model (MVVM) design pattern to ensure testability in isolation and ensures a separation of business and user interface logic.`;

    return poetsKingdom;
}

/**
 * 
 * @returns instantiated Poets Kingdom CV ITEM 
 */
export function poetsKingdomCvItemSn() {
    let linkItem = new LinkItem('/sn/experiences#poetskingdom', 'Poets Kingdom Experience', '/images/miscellaneous/link.svg');
    let poetsKingdomLinkItem = new LinkItem('https://github.com/tinochings/PoetsKingdom', 'Poets Kingdom Source Code', '/images/miscellaneous/link.svg')
    let poetsKingdom = new Cvitem("05/2023 - Ongoing", "Open Source Project", "Android Developer",
        [poetsKingdomLinkItem, linkItem], ['XML','MVVM', 'Kotlin', 'Android', 'Jetpack Compose']);

    poetsKingdom.description = `Munogona kuona mega kuti ndaka gadzira Poets Kingdom sei :), Ndaka gadzira chiratidzo chinooneka parunhare neJetpack Compose
    uye neXML. Ndaka nyanya kushandisa Jetpack Compose panzvimbo yekushandisa XML(Jetpack Compose 90% XML 10%). 
    Shandamurunhare(software/application) iyi inoshandisa multi-threading inowanikwa muKotlin Coroutines kuti runhare isamira kushanda shandamurunhare
    ichiita basa rinogona kutora nguva yakareba. Ndakai gadzira sekudaro kuti vanoshandisa shandamurunhare iyi vakwanise kuishandisa zvinyoro nyoro.
    Ndaka gadzira shandamurunhare iyi ndichisandisa danho rekugadzira mashandamurunhare unoti Model-View-View-Model (MVVM). Izvi zvinobatsira
    kuti tikwanise kuongorora zvemukati zveshandamurunhare iyi tisinga netsekane. Zvakare, zvinobatsira kusiyanisa chiratidzo cheshandamurunhare uye zve
    neruzivo runoshandiswa kuti shandamurunhare ikwanise kuramba ichi shanda.`;

    return poetsKingdom;
}