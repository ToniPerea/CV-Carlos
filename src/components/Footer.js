import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card,Button, Row, Container } from "react-bootstrap";


const FooterComponent = (props) =>{
    return (
      <>
        <Container className="text-center">
            <Row>
            <p>Follow me on Instagram and Twitter to get the latest updates.</p>
            </Row>
            <Row>
                <FontAwesomeIcon className="d-block m-auto w-25" icon={faTwitter}/>
                <FontAwesomeIcon className="d-block m-auto w-25" icon={faInstagram}/>
            </Row>
        </Container>
      </>
    );
}

export default FooterComponent