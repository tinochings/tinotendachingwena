"use client";
import { Row, Col } from "react-bootstrap";
import homePageStyle from './homepage.module.css';
import MetaData from "@/utilities/components/MetaData";

export default function Home() {
  return (
    <>
    <MetaData title={"Title"}></MetaData>
      <IntroductionSection />
    </>
  );
}

function IntroductionSection() {
  return (
    <section id={`${homePageStyle.introduction}`} className="container">
      <Row className={`${homePageStyle.introductionRow}`}>
        <Col id="aboutmetext">
          <main>
            <h1 id={`${homePageStyle.fullname}`}>TINOTENDA CHINGWENA</h1>
            <h2 id={`${homePageStyle.developer}`}>Software Developer</h2>
            <div id={`${homePageStyle.statement}`}>
              <p>Tinotenda Chingwena, connecting Zimbabwe to the world with first class software services</p>
            </div>
            <p>I am an innovative software developer looking to get involved in technological projects that strongly impact
              people. I am looking to make positive changes for people through technological advancements with the skills I
              have obtained throughout my degree and software experience. I offer tailor made software services from the
              ground up. I make Android applications, websites, web apps, together with the secure servers. I have a
              published Android application on the Google Play Store called Madzinza, and I have also published an open
              source Android application on Github called Poets Kingdom. I have created websites for Trin Media, Zvevatsunga
              Steel & Plumbing, and Tinotenda Chingwena. I am highly skilled and offer software services with pristine
              expertise. Each piece of software is built precisely for you. <br></br>
            </p>
          </main>
        </Col>
        <Col className={`${homePageStyle.personalImageCont}`}>
        <img id={`${homePageStyle.personalimage}`} src="/socialMedia/personalphotodupe.png" alt="Photo of Tinotenda Chingwena"></img>
        </Col>
      </Row>
    </section>
  );
}
