import { Container, Navbar, Nav, Image } from "react-bootstrap";


const NavBarComponent = (props) =>{
    return (
      <>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <Image
                style={{ width: "110px" }}
                src="img/Logo-Revalotti.png"
                fluid
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav className=" mx-3 ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBarComponent;