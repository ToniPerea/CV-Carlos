import { Container, Image, Navbar, Row } from "react-bootstrap";

const Fotos = (props) => {
    return (
        <>
            <Container style={{ maxWidth:'100%', padding:'0'}}>
                <Image style={{width:'100%',objectFit:'contain', maxWidth:'100%'}}src="img/Handmade.jpg"/>
            </Container>

        </>
    );
}

export default Fotos;