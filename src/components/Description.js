import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Fotos from "./Fotos";

const Description = (props) => {
    return (
      <>
        <Container className="mb-4">
          <Row className="mt-4 justify-content-center justify-content-center">
            <Col
              xs={12}
              md={5}
              className="mx-3 mb-4"
              style={{ height: "400px" }}
            >
              <h1>Aquadella Tipography</h1>
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
            <Col
              xs={12}
              md={5}
              className="mx-3"
              style={{ height: "280px" }}
            >
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

        <Container className="mb-5" style={{ width: "80%" }}>
          <Fotos />

          <Row className="mt-4 mb-4 justify-content-center">
            <Col
              xs={12}
              md={5}
              className="mx-3 mb-4"
              style={{ backgroundColor: "purple", height: "600px" }}
            >
              <h1>alberto</h1>
            </Col>
            <Col
              xs={12}
              md={5}
              className="mx-3"
              style={{ backgroundColor: "purple", height: "600px" }}
            >
              <h1>antonio</h1>
            </Col>
          </Row>

          <Fotos/>
        </Container>
      </>
    );

}

export default Description;