import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Fotos from "./Fotos";

const ModelInstagram = (props) => {
    return (
      <>
        <Container className="mb-5" style={{ width: "80%", padding: "0" }}>
          <Fotos />

          <Row className="mt-4 mb-4 justify-content-between">
            <Col xs={6} md={6} className="ps-0 ">
              <Image
                src={`/img/proyect` + 1 + `/Aquadella_Especimen.png`}
                fluid
              />
            </Col>
            <Col xs={6} md={6} className="pe-0">
              <Image src={`/img/proyect` + 1 + `/Aquadella_Poster.png`} fluid />
            </Col>
          </Row>

          <Row>
            <Image
              style={{
                width: "100%",
                objectFit: "contain",
                maxWidth: "100%",
                padding: "0",
              }}
              src="/img/proyect1/Aquadella_Poemario.png"
              fluid
            />
          </Row>
        </Container>
      </>
    );
}

export default ModelInstagram;