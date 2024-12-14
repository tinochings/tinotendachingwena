"use client";
import { Row, Col } from "react-bootstrap";
import homePageStyle from './homepage.module.css';
import MetaData from "@/utilities/components/MetaData";
import { CurriculumnVitaeItem, LogoContainer } from "@/utilities/components/homepage/homepageComponents";
import { deltaBeveragesCvItem } from "@/utilities/services/homepage/hompageServices";

export default function Home() {
  return (
    <>
      <MetaData title={"Title"}></MetaData>
      <IntroductionSection />
      <CurriculumnVitae />
    </>
  );
}

/**
 * JSX for the Introduction section
 * @returns 
 */
function IntroductionSection() {
  return (
    <section id={`${homePageStyle.introduction}`} className="container">
      <Row className={`${homePageStyle.introductionRow}`}>
        <Col id={`${homePageStyle.aboutmetext}`}>
          <main>
            <h1 id={`${homePageStyle.fullname}`}>TINOTENDA CHINGWENA</h1>
            <h2 id={`${homePageStyle.developer}`}>Full Stack Software Engineer</h2>
            <div id={`${homePageStyle.statement}`}>
              <p>
                Frontend and backend. To whichever end, I am a supreme artisan. Eloquent, efficient and maintainable code
                are embedded in my dna. My true passion lies in programming. I have a solid foundation through my Bachelors Of Science
                in <b>Computer Science</b> from <b>VU Amsterdam</b>.
                This foundation can be shown in the languages and frameworks I have mastered as follows:
              </p>
            </div>
          </main>
        </Col>
        <Col className={`${homePageStyle.personalImageCont}`}>
          <div id={`${homePageStyle.circleContainer}`}>
            <div id={`${homePageStyle.gridCont}`}>
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/android.png"} imageAlt={"Android Logo"} title={""} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/jetpack_compose.png"} imageAlt={"Jetpack Compose Logo"} title={"Jetpack Compose"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/kotlin.png"} imageAlt={"Kotlin Logo"} title={"Kotlin"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/java.png"} imageAlt={"Java Logo"} title={"Java"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/html.png"} imageAlt={"Html Logo"} title={"HTML"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/css.png"} imageAlt={"Css Logo"} title={"CSS"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/javascript.png"} imageAlt={"Javascript Logo"} title={"JavaScript"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/react.svg"} imageAlt={"React Logo"} title={"React"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/next.svg"} imageAlt={"Nextjs Logo"} title={"Nextjs"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/spring.svg"} imageAlt={"Spring Logo"} title={"Spring"} />
              <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/postgresql.png"} imageAlt={"Postgresql Logo"} title={"PostgresSQL"} />
            </div>
          </div>
        </Col>
        <div className={`${homePageStyle.engineeringCont}`}>
          <span className="h1">Perfecting the art of Software Engineering:</span>
          <div className={`${homePageStyle.engineeringLogos}`}>
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/github.svg"} imageAlt={"Github logo"} title={"Github"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/jira.svg"} imageAlt={"Jira logo"} title={"Jira"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/uml.svg"} imageAlt={"Unified Modelling Language logo"} title={"Unified Modelling Language"} />
            <LogoContainer classList={`${homePageStyle.logoParent}`} imageUrl={"/logos/kiss.png"} imageAlt={"Keep it simple stupid logo"} title={"Keep it simple stupid"} />
          </div>
        </div>
      </Row>
    </section>
  );
}
/**
 * 
 * @returns 
 */
function CurriculumnVitae() {
  return (
    <section className="container">
      <Row>
        <Col id={`${homePageStyle.cvCont}`}>
          <h3 style={{ fontWeight: 900 }}>Curriculumn Vitae</h3>
          <ul id={`${homePageStyle.cvListCont}`}>
            <CurriculumnVitaeItem cvItem={deltaBeveragesCvItem()}></CurriculumnVitaeItem>
            <CurriculumnVitaeItem cvItem={deltaBeveragesCvItem()}></CurriculumnVitaeItem>
          </ul>

        </Col>
      </Row>
    </section>
  );
}