import { Row,Col, Container,Button } from "react-bootstrap";

const About = (props) =>{
    return (
      <>
        <Container>
          <Row>
            <Col style={{ backgroundColor: "yellow" }}>
              <h1>hola</h1>
            </Col>
            <Col>
              <h1>Carlos Revaliente López</h1>
              <p className="w-50">
                Your brand may have a recognizable color,logo,form and font.But
                what about movement?
              </p>
              <b>Work with me</b>
              <p className="w-50">
                Get a faster response by sending detailed information upfront.
                (e.g,cliente,budget,timeframe,storyboards/sketches,NDA)
              </p>
              <a href="mailto:revalotti@gmail.com">revalotti@gmail.com</a>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <h1>Let´s talk</h1>
              <p className="w-50">
                we´re always open for a chat, so get in touch to find out how we
                can help
              </p>
            </Col>
            <Col>
              <Button variant="dark">Get in touch ---></Button>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default About;