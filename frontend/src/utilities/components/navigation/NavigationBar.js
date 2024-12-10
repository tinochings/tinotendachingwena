import { Container, NavbarBrand } from "react-bootstrap";

export default function NavigationBar() {

    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <Container>
                    <NavbarBrand>
                        <img id="logo" src="/logo/WCLOGO1.png" alt="WC Brand logo" />
                    </NavbarBrand>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
                        data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="nav-cont collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav ul">
                            <li className="nav-item li">
                                <a className="menu-item vertical-centre a" title="Navigate to Tinotenda's experiences" href="/experiences">Experiences</a>
                            </li>
                            <li className="nav-item li">
                                <a className="menu-item vertical-centre a" title="Navigate to request Tinotenda's services" href="/services">Services</a>
                            </li>
                            <li className="nav-item li">
                                <a className="menu-item vertical-centre a" title="Change language to Zezuru" href="/sn/" id="language">Zezuru</a>
                            </li>
                            <li className="nav-item li dropdown">
                                <a className="menu-item vertical-centre dropdown-toggle a" title="Click to bring out socials container" href="#"
                                    role="button" id="socialsMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Socials
                                </a>
                                <div className="dropdown-menu" aria-labelledby="socialsMenuLink">
                                    <a className="dropdown-item a" title="Tinotenda Chingwena's Facebook page" aria-label="Opens Tinotenda Chingwena's facebook page"
                                        href="https://www.facebook.com/tchingwena1" target="_blank">
                                        <img className="linkimg" src="socialMedia/facebook.svg" alt="Facebook Logo" /> <span>Facebook</span></a>
                                    <a className="dropdown-item a" title="Tinotenda Chingwena's LinkedIn page" aria-label="Opens Tinotenda Chingwena's LinkedIn page"
                                        href="http://www.linkedin.com/in/tinotenda-chingwena-6034a6211"
                                        target="_blank">
                                            <img src="socialMedia/linkedin.svg" alt="Linkedin Logo" className="linkimg" />
                                        <span>LinkedIn</span></a>
                                    <a className="dropdown-item a" title="Tinotenda Chingwena's Github page" aria-label="Opens Tinotenda Chingwena's GitHub page"
                                        href="https://github.com/tinochings" target="_blank">
                                        <img src="socialMedia/githublogo.svg" alt="Github Logo" className="linkimg" /> 
                                        <span>Github</span> </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
};