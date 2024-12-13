"use client";
import { Row, Col } from "react-bootstrap";
import homePageStyle from './homepage.module.css';
import MetaData from "@/utilities/components/MetaData";
import { LogoContainer } from "@/utilities/components/homepage/homepageComponents";

export default function Home() {
  return (
    <>
      <MetaData title={"Title"}></MetaData>
      <IntroductionSection />
      <Projects/>
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
            {/* <p>I am an innovative software developer looking to get involved in technological projects that strongly impact
              people. I am looking to make positive changes for people through technological advancements with the skills I
              have obtained throughout my degree and software experience. I offer tailor made software services from the
              ground up. I make Android applications, websites, web apps, together with the secure servers. I have a
              published Android application on the Google Play Store called Madzinza, and I have also published an open
              source Android application on Github called Poets Kingdom. I have created websites for Trin Media, Zvevatsunga
              Steel & Plumbing, and Tinotenda Chingwena. I am highly skilled and offer software services with pristine
              expertise. Each piece of software is built precisely for you. <br></br>
            </p> */}
          </main>
        </Col>
        <Col className={`${homePageStyle.personalImageCont}`}>
          <img id={`${homePageStyle.personalimage}`} src="/socialMedia/personalphotodupe.png" alt="Photo of Tinotenda Chingwena"></img>
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

function Projects() {
  return (
    <section id={`${homePageStyle.aboutme}`} className="container">
      <Row>
        <Col id={`${homePageStyle.education}`}>
          <h3 style={{ fontWeight: 900 }}>Education</h3>
        </Col>
        <Col id={`${homePageStyle.languages}`}>
        </Col>
      </Row>
    </section>
  );
}