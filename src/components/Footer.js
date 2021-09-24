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
      </>
    );
}

export default FooterComponent