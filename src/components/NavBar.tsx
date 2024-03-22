import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import React from "react";
import { useCookies } from "react-cookie";
import { showToast } from "~/helpers";

interface NavBarProps {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ token, setToken }) => {
  const [, , removeCookies] = useCookies(["jwt-token"]);

  const handleLogout = () => {
    removeCookies("jwt-token");
    setToken(undefined);
    showToast("Sie wurden erfolgreich abgemeldet!", "info");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-white"
      fixed="top"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <Container>
        <Navbar.Brand href="/">
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

            {token ? (
              <>
                <Nav.Link href="/cart">
                  <i className="bi bi-cart3"></i>
                  &nbsp;
                  <strong className="urbanist-400">({3})</strong>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="urbanist-400"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                  title="Logout"
                >
                  <i
                    className="bi bi-box-arrow-in-right"
                    style={{ fontSize: 18 }}
                  ></i>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login" className="urbanist-400">
                <strong>Login</strong>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
