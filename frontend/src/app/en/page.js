"use client";
import { Row, Col } from "react-bootstrap";
import homePageStyle from './homepage.module.css';
import MetaData from "@/utilities/components/MetaData";
import { CurriculumnVitaeItem, LogoContainer } from "@/utilities/components/homepage/homepageComponents";
import { deltaBeveragesCvItem, poetsKingdomCvItem, tiisGlamStudioCvItem, trinMediaCvItem, zvevatsungaSteelAndPlumbingCvItem } from "@/utilities/services/homepage/hompageServices";
import { enresource } from "@/utilities/resources/en";
import { snresource } from "@/utilities/resources/sn";

export default function Home({language="en"}) {
  let languageResourceObject = language === "en" ? enresource : snresource;
  return (
    <>
      <MetaData title={"Title"}></MetaData>
      <IntroductionSection languageResource={languageResourceObject}/>
      <CurriculumnVitae language={language}/>
    </>
  );
}

/**
 * JSX for the Introduction section
 * @returns 
 */
function IntroductionSection({languageResource}) {
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
            <img id={`${homePageStyle.personalimage}`} src="/socialMedia/personalphotodupe.png" alt="Tinotenda Chingwena"></img>
            </div>
          </main>
        </Col>
        <Col className={`${homePageStyle.frameworksCont}`}>
          <div id={`${homePageStyle.circleContainer}`}>
            <div id={`${homePageStyle.gridCont}`}>
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/android.png"} imageAlt={"Android Logo"} title={""} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/jetpack_compose.png"} imageAlt={"Jetpack Compose Logo"} title={"Jetpack Compose"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/kotlin.png"} imageAlt={"Kotlin Logo"} title={"Kotlin"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/java.png"} imageAlt={"Java Logo"} title={"Java"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/html.png"} imageAlt={"Html Logo"} title={"HTML"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/css.png"} imageAlt={"Css Logo"} title={"CSS"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/javascript.png"} imageAlt={"Javascript Logo"} title={"JavaScript"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/react.png"} imageAlt={"React Logo"} title={"React"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/next.svg"} imageAlt={"Nextjs Logo"} title={"Nextjs"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/spring.svg"} imageAlt={"Spring Logo"} title={"Spring"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/postgresql.png"} imageAlt={"Postgresql Logo"} title={"PostgresSQL"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/bootstrap.png"} imageAlt={"Bootstrap Logo"} title={"Bootstrap"} />
            </div>
          </div>
        </Col>
        <div className={`${homePageStyle.engineeringCont}`}>
          <span className="h1">{languageResource.engineeringStatement}</span>
          <div className={`${homePageStyle.engineeringLogos}`}>
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/github.svg"} imageAlt={"Github logo"} title={"Github"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/jira.png"} imageAlt={"Jira logo"} title={"Jira"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/uml.png"} imageAlt={"Unified Modelling Language logo"} title={"Unified Modelling Language"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/kiss.png"} imageAlt={"Keep it simple stupid logo"} title={"Keep it simple stupid"} />
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
function CurriculumnVitae({language = "en"}) {
  return (
    <section className="container">
      <Row>
        <Col id={`${homePageStyle.cvCont}`}>
          <h3 style={{ fontWeight: 900 }}>Curriculumn Vitae</h3>
          <ul id={`${homePageStyle.cvListCont}`}>
            <CurriculumnVitaeItem cvItem={deltaBeveragesCvItem()}></CurriculumnVitaeItem>
            <CurriculumnVitaeItem cvItem={tiisGlamStudioCvItem()}></CurriculumnVitaeItem>
            <CurriculumnVitaeItem cvItem={zvevatsungaSteelAndPlumbingCvItem()}></CurriculumnVitaeItem>
            <CurriculumnVitaeItem cvItem={trinMediaCvItem()}></CurriculumnVitaeItem>
            <CurriculumnVitaeItem cvItem={poetsKingdomCvItem()}></CurriculumnVitaeItem>
          </ul>

        </Col>
      </Row>
    </section>
  );
}