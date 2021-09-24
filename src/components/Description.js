import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Fotos from "./Fotos";

const Description = (props) => {
    return (
      <>
        <Container className="mb-4">
          <Row>
            <Col xs={12} md={5} className="mx-3">
              <h1>Aquadella Tipography</h1>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-start">
            <Col xs={12} md={5} className="mx-3 mb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum elit libero, ac dignissim dui facilisis a. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Mauris semper turpis eu bibendum tristique.
                Vestibulum ultrices, massa a bibendum feugiat, metus nisi
                blandit risus, a malesuada purus lacus at orci.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum elit libero, ac dignissim dui facilisis a. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Mauris semper turpis eu bibendum tristique.
                Vestibulum ultrices, massa a bibendum feugiat, metus nisi
                blandit risus, a malesuada purus lacus at orci.
              </p>
            </Col>
            <Col xs={12} md={5} className="">
              <ListGroup className="mx-3 mt-2" variant="flush">
                <ListGroup.Item>
                  <b>Year:</b> 2018
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Client:</b> Myself
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Our role:</b> Ilustration System, Creative Direction
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Creative Direction:</b> Graham Hill
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Modeling & Animation:</b> Toast
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Sound Design:</b> Proper
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>

        <Container className="mb-5" style={{ width: "80%", padding: "0" }}>
          <Fotos />

          <Row className="mt-4 mb-4">
            <Image
              style={{
                width: "100%",
                objectFit: "contain",
                maxWidth: "100%",
                padding: "0",
              }}
              src="/img/proyect1/Aquadella_Especimen.png"
              fluid
            />
          </Row>
          <Row className="mb-4">
            <Image
              style={{
                width: "100%",
                objectFit: "contain",
                maxWidth: "100%",
                padding: "0",
              }}
              src="/img/proyect1/Aquadella_Poster.png"
              fluid
            />
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

export default Description;