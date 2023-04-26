import { Navbar, Nav, Container } from "react-bootstrap";


export const NavBar =() => {

  return (
    <>
      <Navbar expand="md" className="">
        <Container>
          <Navbar.Brand className="navbar-brand" >
            sunnyside
          </Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#contact" className='navbar-link'>Contact</Nav.Link>
              <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
              <Nav.Link href="#services" className='navbar-link'>Services</Nav.Link>
              <Nav.Link href="#home" className='navbar-link'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

