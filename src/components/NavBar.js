import { Container, Navbar, Nav, Image } from "react-bootstrap";


const NavBarComponent = (props) =>{
    return (
      <>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <Image style={{width:'110px'}}src="img/Logo-Revalotti.png" fluid />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar className="justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Navbar>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBarComponent;