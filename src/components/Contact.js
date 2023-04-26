import { Container, Row } from "react-bootstrap";
import  gobelet  from "../assets/img/gobelets-papier.png"
import  fond  from "../assets/img/fond-orange.png"
import  cornet  from "../assets/img/cornet.png"
import  sucre  from "../assets/img/sucre.png"

export const Contact = () => {
    return(
        <section className="contact" id="contact">
            
                <Container className="container">
                    <Row className="row">
                        <div  className="">
                        <img src={gobelet} alt="Header Img" className=""/>
                        </div>
                        <div  className="">
                            <img src={fond} alt="Header Img" className=""/>
                        </div>
                        <div  className="">
                        <img src={cornet} alt="Header Img" className=""/>
                        </div>
                        <div  className="">
                            <img src={sucre} alt="Header Img" className=""/>
                        </div>
                    </Row>
                </Container>
        </section>
    )
}