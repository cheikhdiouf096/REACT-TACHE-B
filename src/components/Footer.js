import { Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const Footer = () => {
    return(
        <section className="footer" id="footer">
            
                <Container className="con">
                    <h1>sunnyside</h1>
                    <Row className="row1">
                        <a href="#home">About</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Projects</a>
                    </Row>
                    <Row className="row2">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com"><img src={navIcon1} alt="Icon"  /></a>
                        </div>
                        <div className="social-icon" >
                        <a href="https://www.facebook.com"><img src={navIcon2} alt="Icon" /></a>
                        </div>
                        <div className="social-icon" >
                        <a href="https://www.instagram.com"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                    </Row>
                </Container>
        </section>
    )
}