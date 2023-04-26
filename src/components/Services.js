import { Container, Row } from "react-bootstrap";
import  verre  from "../assets/img/verre-rose.png"
import  pomme  from "../assets/img/pommes.png"
import  oeuf  from "../assets/img/oeuf-poule.png"
import  orange  from "../assets/img/orange-feuille.png"






export const Services = () => {
    return(
        <section className="services" id="services">
            
                <Container className="cont">
                    <Row>
                        <div className="div gauche p1">
                            <h2>Transform your <br /> brand</h2>
                            <p>Lorem ipsum is a simply dummy text of the printing typesetting industry,
                                lorem ipsum has been the industry's standard dummy since 1500s, 
                                when an unknown printer took a gallery of type and scramble it to make a type speimen book
                            </p>
                            <button>LEARN MORE</button>
                        </div>
                        <div  className="div gauche p2">
                        <img src={verre} alt="Header Img" className="img1"/>
                        </div>
                        <div  className="div gauche p3">
                            <img src={pomme} alt="Header Img" className="img2"/>
                            <h2>Graphic design</h2>
                            <p>Great design makes you memorable. We deliver <br/>
                            artwork that underscore your brand message <br/>
                            and captures potential client's attention
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div  className="div droite p4">
                        <img src={oeuf} alt="Header Img" className="img3"/>
                        </div>
                        <div className="div droite p5">
                            <h2>Stand out to the right <br />  audience</h2>
                            <p>Lorem ipsum is a simply dummy text of the printing typesetting industry,
                                lorem ipsum has been the industry's standard dummy since 1500s, 
                                when an unknown printer took a gallery of type and scramble it to make a type speimen book
                            </p>
                            <button>LEARN MORE</button>
                        </div>
                        <div  className="div droite p6">
                            <img src={orange} alt="Header Img" className="img4"/>
                            <h2 >PhotographY</h2>
                            <p>Increase your credibility by getting your most <br/>
                                stunning, high quality phote that increase your<br/>
                                 bussiness image
                            </p>
                        </div>
                    </Row>
                </Container>
        </section>
    )
}