import { Container, Row } from "react-bootstrap";
import img1 from "../assets/img/im1.jpg"
import img2 from "../assets/img/im2.jpg"
import img3 from "../assets/img/im3.jpg"


export const Projects = () => {
    return(
        <section className="projects" id="projects">
            <Container className="contain">
                <h1 className="text-align-center">CLIENT TESTIMONIALS</h1>
                
                <Row className="row">
                    <div className="div-bx">
                        <div className="div-img">
                            <img src={img1} alt="image"  className="img-testimony"/>
                        </div>
                        We put our trust in sunnyside and they <br/>
                        delivered, making sure our needs meet <br/>
                        and deadlines were always hit.
                        <h2>Parven Anaand</h2>  
                        <span>Marketing Director</span>    
                    </div>
                    <div className="div-bx">
                        <div className="div-img">
                            <img src={img2} alt="image"  className="img-testimony"/>
                        </div>
                        sunnyside's enthusiam coupled to with their <br/>
                        keen interest in our brand success made it <br/>
                        a satisfiying and enjoyable experience.
                        <h2>Diana Petersen</h2>  
                        <span>Chief Operating Officer</span>   
                    </div>
                    <div className="div-bx">
                        <div className="div-img">
                        <img src={img3} alt="image"  className="img-testimony"/>
                        </div>
                        Incredible end results ! our sale increased<br/>
                        over 400% when we work with sunnyside. <br/>
                        highly recommended!
                        <h2>Larry Parker</h2>
                        <span>Bussiness Owner</span>   
                    </div>
                </Row>
            </Container>
        </section>
    )
}