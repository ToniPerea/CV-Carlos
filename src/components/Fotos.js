import { Container, Image, Navbar, Row } from "react-bootstrap";

const Fotos = (props) => {
    return (
      <>
        {/* <Container style={{ maxWidth:'100%', padding:'0'}}> */}
        <Row >
          <Image
            style={{ width: "100%", objectFit: "contain", maxWidth: "100%",padding:'0' }}
            src="img/proyect1/Aquadella_Libreta.png"
          />
        </Row>
        {/* </Container> */}
      </>
    );
}

export default Fotos;