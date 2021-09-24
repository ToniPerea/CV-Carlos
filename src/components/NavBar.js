import { Container, Navbar, Nav, Image } from "react-bootstrap";


const NavBarComponent = (props) =>{
    return (
      <>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image style={{ width: "110px" }} src="img/Logo-Revalotti.png" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className=" mx-3 ">
                <Nav.Link className="mx-auto" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mx-auto" href="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link className="mx-auto" href="/about">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBarComponent;