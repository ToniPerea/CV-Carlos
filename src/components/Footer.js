import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col,Container } from "react-bootstrap";
import Media from 'react-media';


const FooterComponent = (props) =>{
    return (
      <>
        <Media query={{ maxWidth: 780 }}>
          {(matches) =>
            matches ? (
              <Container className="mb-5">
                <Row className="text-center" style={{fontSize:"10px"}}>
                  <p>
                    Follow me on Instagram and Twitter to get the latest
                    updates.
                  </p>
                </Row>
                <Row className="d-flex justify-content-center" style={{fontSize:"12px"}}>
                  <Col sm={2} className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      size="3x"
                      className="px-2"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      size="3x"
                      className="px-2"
                      icon={faInstagram}
                    />
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container className="mb-5">
                <Row className="text-center">
                  <p>
                    Follow me on Instagram and Twitter to get the latest
                    updates.
                  </p>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col sm={2} className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      size="3x"
                      className="px-2"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      size="3x"
                      className="px-2"
                      icon={faInstagram}
                    />
                  </Col>
                </Row>
              </Container>
            )
          }
        </Media>
      </>
    );
}

export default FooterComponent