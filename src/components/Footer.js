import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col,Container } from "react-bootstrap";


const FooterComponent = (props) =>{
    return (
      <>
        <Container className="mb-5">
          <Row className="text-center">
            <p>Follow me on Instagram and Twitter to get the latest updates.</p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col
              sm={2}
              
              className="d-flex justify-content-center"
            >
              <FontAwesomeIcon size="3x" className="px-2" icon={faTwitter} />
              <FontAwesomeIcon size="3x" className="px-2" icon={faInstagram} />
            </Col>
          </Row>
        </Container>
        {/* <Container className="text-center">
          <Row>
            <p>Follow me on Instagram and Twitter to get the latest updates.</p>
          </Row>
          <Row className="justify-content-center">
            <Col  className="fixed d-block px-4"  xs={1} style={{width:'0.875em'}} >
              <FontAwesomeIcon size="2x" icon={faTwitter} />
              
            </Col>
            <Col  className="fixed px-4"  style={{width:'0.875em'}} xs={1}>
            <FontAwesomeIcon size="2x" icon={faInstagram} />
            </Col>
          </Row>
        </Container> */}
      </>
    );
}

export default FooterComponent