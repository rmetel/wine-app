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
          <strong>WINESHOP</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#red">Rotweine</Nav.Link>
            <Nav.Link href="#white">Weißweine</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Kontakt</Nav.Link>
            <Nav.Link href="#memes">Impressum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
