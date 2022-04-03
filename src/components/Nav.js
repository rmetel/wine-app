import React from "react";

// reactstrap components
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="bg-white" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <span className="font-weight-bold">WINE</span>
            </NavbarBrand>
            <button className="navbar-toggler" id="navbarNav" type="button">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNav">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#red" onClick={e => e.preventDefault()}>
                    Rotweine
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#white" onClick={e => e.preventDefault()}>
                    Weißweine
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#sales" onClick={e => e.preventDefault()}>
                    Angebote
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;