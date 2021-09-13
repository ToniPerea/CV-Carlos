import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card,Button, Row, Col,Container } from "react-bootstrap";


const FooterComponent = (props) =>{
    return (
      <>
        <Container className="text-center">
          <Row>
            <p>Follow me on Instagram and Twitter to get the latest updates.</p>
          </Row>
          <Row className="justify-content-center fixed">
            <Col  className="fixed d-block px-4"  xs={1} style={{/*marginRight:'-50px, backgroundColor:'blue*/width:'0.875em'}} >
              <FontAwesomeIcon size="2x" icon={faTwitter} />
              
            </Col>
            <Col  className="fixed px-4"  style={{width:'0.875em'}} xs={1}>
            <FontAwesomeIcon size="2x" icon={faInstagram} />
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default FooterComponent