"use client";

import { Col, Container, Dropdown, Navbar, NavbarBrand, Row, Nav } from "react-bootstrap";

export default function NavigationBar({ language = "en" }) {

    return (
        <header>
            <Navbar expand="md">
                <Container>
                    <NavbarBrand as="a" href={language === "en" ? "/en/" : "/sn/"}>
                        <img id="logo" src="/images/logo/WCLOGO1.png" alt="WC Brand logo" />
                    </NavbarBrand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <img width={35} src="/images/miscellaneous/hamburger.svg" alt="Hambuger menu"></img>
                    </Navbar.Toggle>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav as="ul" className="ul">
                            <Nav.Item as="li" className="li">
                                <Nav.Link className="menu-item vertical-centre a" title="Navigate to Tinotenda's experiences" href={language === "en" ? "/en/experiences" : "/sn/experiences"}>{language === "en" ? "Experiences" : "Nhoroondo"}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="li">
                                <Nav.Link className="menu-item vertical-centre a" title="Navigate to contact form page" href={language === "en" ? "/en/contact" : "/sn/contact"}> {language === "en" ? "Contact" : "Ndibatei"}</Nav.Link>
                            </Nav.Item>
                            <Dropdown as="li" className="li">
                                <Dropdown.Toggle title="Click to bring out socials container" className="menu-item a vertical-centre" id="socialsMenuLink" as="a" href="#">
                                    Socials
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item title="Tinotenda Chingwena's Facebook page" aria-label="Opens Tinotenda Chingwena's facebook page" href="https://www.facebook.com/tchingwena1" target="_blank">
                                        <img className="linkimg" src="/images/socialMedia/facebook.svg" alt="Facebook Logo" />
                                        <span>Facebook</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item title="Tinotenda Chingwena's LinkedIn page" aria-label="Opens Tinotenda Chingwena's LinkedIn page"
                                        href="http://www.linkedin.com/in/tinotenda-chingwena-6034a6211" target="_blank">
                                        <img src="/images/socialMedia/linkedin.svg" alt="Linkedin Logo" className="linkimg" />
                                        <span>LinkedIn</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item title="Tinotenda Chingwena's Github page" aria-label="Opens Tinotenda Chingwena's GitHub page" href="https://github.com/tinochings" target="_blank">
                                        <img src="/images/socialMedia/githublogo.svg" alt="Github Logo" className="linkimg" />
                                        <span>Github</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Item as="li" className="li">
                                <Nav.Link className="menu-item vertical-centre a" title="Change language to Zezuru" href={language === "en" ? "/sn/" : "/en/"} id="language">{language === "en" ? "Zezuru" : "English"}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export function Footer({language = "en"}) {
    return (
        <footer>
            <Container>
                <div className="footerLine"></div>
                <Row>
                    <span className="h3">Tinotenda Chingwena - Full Stack Engineer</span>
                    <Col className="footerCol1">
                        
                        <div className="footerImages">
                        
                        <a title="Navigate to contact form page" aria-label="Navigates to the contact form page" href={language === "en" ? "/en/contact" : "/sn/contact"}>
                                <img src="/images/miscellaneous/contact.svg" alt="Contact Form Logo" className="linkimg"></img>
                            </a>
                            <a title="Email Tinotenda Chingwena" aria-label="Navigates to your email client" href="mailto:tinotendachings@gmail.com">
                                <img src="/images/miscellaneous/email.svg" alt="Email Logo" className="linkimg"></img>
                            </a>
                            <a title="Tinotenda Chingwena's LinkedIn page" aria-label="Opens Tinotenda Chingwena's LinkedIn page"
                                href="http://www.linkedin.com/in/tinotenda-chingwena-6034a6211" target="_blank">
                                <img src="/images/socialMedia/linkedin.svg" alt="Linkedin Logo" className="linkimg" />
                            </a>
                            <a title="Tinotenda Chingwena's Facebook page" aria-label="Opens Tinotenda Chingwena's facebook page" href="https://www.facebook.com/tchingwena1" target="_blank">
                                <img className="linkimg" src="/images/socialMedia/facebook.svg" alt="Facebook Logo" />
                            </a>
                            <a title="Tinotenda Chingwena's Github page" aria-label="Opens Tinotenda Chingwena's GitHub page" href="https://github.com/tinochings" target="_blank">
                                <img src="/images/socialMedia/githublogo.svg" alt="Github Logo" className="linkimg" />
                            </a>

                        </div>
                    </Col>
                    <Col className="footerCol2">
                        <p>
                            User Interface coded in <span style={{ color: '#0000FF', fontWeight: 900 }}>Visual Studio Code</span> and built with <span style={{ color: '#000000', fontWeight: 700 }}>Next.js.</span>
                            Server coded in InteliJ and built with <span style={{ color: '#008000', fontWeight: 900 }}>Spring Boot</span>. Source code can be found at <a style={{color: "mediumblue", fontWeight: 900}} href="https://github.com/tinochings/tinotendachingwena" target='_blank'>tinotendachingwena</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}