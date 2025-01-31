"use client";
import { Row, Col } from "react-bootstrap";
import homePageStyle from './homepage.module.css';
import MetaData from "@/utilities/components/MetaData";
import { CurriculumnVitaeItem, LogoContainer } from "@/utilities/components/homepage/homepageComponents";
import {
  deltaBeveragesCvItem, poetsKingdomCvItem, tiisGlamStudioCvItem, trinMediaCvItem, zvevatsungaSteelAndPlumbingCvItem,
  deltaBeveragesCvItemSn, poetsKingdomCvItemSn, tiisGlamStudioCvItemSn, trinMediaCvItemSn, zvevatsungaSteelAndPlumbingCvItemSn
} from "@/utilities/services/homepage/hompageServices";
import { enresource, metaDataResourceHome } from "@/utilities/resources/en";
import { snresource } from "@/utilities/resources/sn";

export default function Home({ language = "en" }) {
  let languageResourceObject = language === "en" ? enresource : snresource;
  return (
    <>
      <MetaData title={metaDataResourceHome.title} description={metaDataResourceHome.description} canonical={languageResourceObject.canonical}/>
      <IntroductionSection languageResource={languageResourceObject} />
      <CurriculumnVitae language={language} />
    </>
  );
}

/**
 * JSX for the Introduction section
 * @returns 
 */
function IntroductionSection({ languageResource }) {
  return (
    <section id={`${homePageStyle.introduction}`} className="container">
      <Row className={`${homePageStyle.introductionRow}`}>
        <Col id={`${homePageStyle.aboutmetext}`}>
          <main>
            <h1 id={`${homePageStyle.fullname}`}>TINOTENDA CHINGWENA</h1>
            <h2 id={`${homePageStyle.developer}`}>Full Stack Software Engineer</h2>
            <div id={`${homePageStyle.statement}`}>
              <p>
                {languageResource.statement1} <b>Computer Science</b> from <b>VU Amsterdam</b>.
                {languageResource.statement2} <a id={`${homePageStyle.personalLink}`} href="https://github.com/tinochings/tinotendachingwena" target='_blank'>Tinotenda Chingwena Source code</a>.
                {languageResource.statement3}
              </p>
            </div>
            <div id={`${homePageStyle.personalImageCont}`}>
              <img id={`${homePageStyle.personalimage}`} src="/images/socialMedia/personalphotodupe.png" alt="Tinotenda Chingwena"></img>
            </div>
          </main>
        </Col>
        <Col className={`${homePageStyle.frameworksCont}`}>
          <div id={`${homePageStyle.circleContainer}`}>
            <div id={`${homePageStyle.gridCont}`}>
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/android.png"} imageAlt={"Android Logo"} title={""} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/jetpack_compose.png"} imageAlt={"Jetpack Compose Logo"} title={"Jetpack Compose"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/kotlin.png"} imageAlt={"Kotlin Logo"} title={"Kotlin"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/java.png"} imageAlt={"Java Logo"} title={"Java"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/html.png"} imageAlt={"Html Logo"} title={"HTML"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/css.png"} imageAlt={"Css Logo"} title={"CSS"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/javascript.png"} imageAlt={"Javascript Logo"} title={"JavaScript"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/react.png"} imageAlt={"React Logo"} title={"React"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/next.svg"} imageAlt={"Nextjs Logo"} title={"Nextjs"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/spring.svg"} imageAlt={"Spring Logo"} title={"Spring"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/postgresql.png"} imageAlt={"Postgresql Logo"} title={"PostgresSQL"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/bootstrap.png"} imageAlt={"Bootstrap Logo"} title={"Bootstrap"} />
            </div>
          </div>
        </Col>
        <div className={`${homePageStyle.engineeringCont}`}>
          <span className="h1">{languageResource.engineeringStatement}</span>
          <div className={`${homePageStyle.engineeringLogos}`}>
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/github.svg"} imageAlt={"Github logo"} title={"Github"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/jira.png"} imageAlt={"Jira logo"} title={"Jira"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/uml.png"} imageAlt={"Unified Modelling Language logo"} title={"Unified Modelling Language"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/images/logos/kiss.png"} imageAlt={"Keep it simple stupid logo"} title={"Keep it simple stupid"} />
          </div>
        </div>
      </Row>
    </section>
  );
}
/**
 * 
 * @returns JSX for Curriculumn Vitae Section
 */
function CurriculumnVitae({ language = "en" }) {
  return (
    <section className="container">
      <Row>
        <Col id={`${homePageStyle.cvCont}`}>
          <div className={`${homePageStyle.cvHeaderCont}`}>
            <h3 style={{ fontWeight: 900 }}>Curriculumn Vitae</h3>
            <a href="/cv/CV_Tinotenda_Chingwena.pdf" download={"Tinotenda Chingwena CV"}>
              <img width={40} src="/images/miscellaneous/pdf.svg"></img>
            </a>
          </div>

          <ul id={`${homePageStyle.cvListCont}`}>
            {language === "en" ? <>
              <CurriculumnVitaeItem cvItem={deltaBeveragesCvItem()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={tiisGlamStudioCvItem()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={zvevatsungaSteelAndPlumbingCvItem()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={trinMediaCvItem()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={poetsKingdomCvItem()}></CurriculumnVitaeItem>
            </> : <>
              <CurriculumnVitaeItem cvItem={deltaBeveragesCvItemSn()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={tiisGlamStudioCvItemSn()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={zvevatsungaSteelAndPlumbingCvItemSn()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={trinMediaCvItemSn()}></CurriculumnVitaeItem>
              <CurriculumnVitaeItem cvItem={poetsKingdomCvItemSn()}></CurriculumnVitaeItem>
            </>}
          </ul>

        </Col>
      </Row>
    </section>
  );
}