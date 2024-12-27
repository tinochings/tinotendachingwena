"use client";

import { Col, Container, Dropdown, Navbar, NavbarBrand, Row, Nav } from "react-bootstrap";

export default function NavigationBar({language="en"}) {

    return (
        <header>
            <Navbar expand="md">
                <Container>
                    <NavbarBrand as="a" href={language === "en" ? "/en/" : "/sn/"}>
                        <img id="logo" src="/logo/WCLOGO1.png" alt="WC Brand logo" />
                    </NavbarBrand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    </Navbar.Toggle>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav as="ul" className="ul">
                            <Nav.Item as="li" className="li">
                                <Nav.Link className="menu-item vertical-centre a" title="Navigate to Tinotenda's experiences" href={language === "en" ? "/en/experiences" : "/sn/experiences"}>{language === "en" ? "Experiences" : "Nhoroondo"}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="li">
                                <Nav.Link className="menu-item vertical-centre a" title="Navigate to request Tinotenda's services" href={language === "en" ? "/en/contact" : "/sn/contact"}> {language === "en" ? "Contact" : "Ndibatei"}</Nav.Link>
                            </Nav.Item>
                                <Dropdown as="li" className="li">
                                    <Dropdown.Toggle title="Click to bring out socials container" className="menu-item a vertical-centre" id="socialsMenuLink" as="a" href="#">
                                        Socials
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item title="Tinotenda Chingwena's Facebook page" aria-label="Opens Tinotenda Chingwena's facebook page" href="https://www.facebook.com/tchingwena1" target="_blank">
                                            <img className="linkimg" src="/socialMedia/facebook.svg" alt="Facebook Logo" />
                                            <span>Facebook</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item title="Tinotenda Chingwena's LinkedIn page" aria-label="Opens Tinotenda Chingwena's LinkedIn page"
                                            href="http://www.linkedin.com/in/tinotenda-chingwena-6034a6211" target="_blank">
                                            <img src="/socialMedia/linkedin.svg" alt="Linkedin Logo" className="linkimg" />
                                            <span>LinkedIn</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item title="Tinotenda Chingwena's Github page" aria-label="Opens Tinotenda Chingwena's GitHub page" href="https://github.com/tinochings" target="_blank">
                                            <img src="/socialMedia/githublogo.svg" alt="Github Logo" className="linkimg" />
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

export function Footer() {
    return (
        <footer>
            <Container>
                <Row className="footer-row-cont">
                    <Col>
                        <Row>
                            <Col id="footer-img-div">
                                <img className="giraffe" src="/miscellaneous/giraffe.svg" alt="Giraffe" />
                            </Col>
                            <Col>
                                <img className="giraffe" src="/miscellaneous/giraffe_reverse.svg" alt="Giraffe" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="vertical-centre flex-column">
                        <p id="footer-salutation">Your identity is what defines you. Like my ancestors, my goal is to grow and exceed
                            above and beyond, like my totem
                            the giraffe. Learning and growing one step at a time.
                        </p> 
                        <p>
                            Nhari Unendoro
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}