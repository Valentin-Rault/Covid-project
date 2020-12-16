import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderNavbar({ location }) {
  const { pathname } = location;

  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-5">
      <Nav>
        <Nav.Item>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Nav.Item>
        <Nav.Item>
          <Navbar.Collapse id="basic-navbar-nav" />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/" active={pathname == "/"}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/country/DK"
            active={pathname.includes("/country/DK")}
          >
            Countries
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default withRouter(HeaderNavbar);
