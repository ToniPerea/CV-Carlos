import { Row,Col, Container,Button, Image } from "react-bootstrap";

const About = (props) =>{
    return (
      <>
        <Container className="mb-5">
          <Row className="mb-5">
            <Col className="text-center" >
              <Image src="img/carlos.png" className="w-50"></Image>
            </Col>
            <Col>
              <h1>Carlos Revaliente López</h1>
              <p className="w-50">
                Your brand may have a recognizable color,logo,form and font.But
                what about movement?
              </p>
              <p className="w-50">
                Get a faster response by sending detailed information upfront.
                (e.g,cliente,budget,timeframe,storyboards/sketches,NDA)
              </p>
              <b>Trabajemos juntos!</b>
              <p>
                <a href="mailto:revalotti@gmail.com">revalotti@gmail.com</a>
              </p>

              <p className="w-50">Mi trabajo en diferentes plataformas</p>
              <p>
                <a href="mailto:revalotti@gmail.com">Instagram</a>
              </p>
              <p>
                <a href="mailto:revalotti@gmail.com">Vimeo</a>
              </p>
            </Col>
          </Row>
          <Container></Container>
        </Container>
      </>
    );
}

export default About;