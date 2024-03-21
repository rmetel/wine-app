import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-white"
      fixed="top"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className="pacifico">Wineshop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#red" className="urbanist-400">
              <strong>Rotweine</strong>
            </Nav.Link>
            <Nav.Link href="#white" className="urbanist-400">
              <strong>Weißweine</strong>
            </Nav.Link>
            <Nav.Link href="#deets" className="urbanist-400">
              <strong>Angebote</strong>
            </Nav.Link>
            <Nav.Link href="/cart">
              <i className="bi bi-cart3"></i>
              &nbsp;
              <strong className="urbanist-400">({3})</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
