import { Container, Row, Col } from "react-bootstrap";
import hedearing from "../assets/img/orange-citron.png"


export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <h1>WE ARE CREATIVES</h1>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5} >
                        <img src={hedearing} alt="Header Img" />
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

