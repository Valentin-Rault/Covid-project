import React from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
        <HeaderLink path="/" activePath={pathname == "/"}>
          Home
        </HeaderLink>
        <HeaderLink
          path="/country/DK"
          activePath={pathname.match("/country/[A-Z]{2}")}
        >
          Countries
        </HeaderLink>
      </Nav>
    </Navbar>
  );
}

const HeaderLink = ({ path, activePath, children }) => {
  return (
    <Nav.Item>
      <Nav.Link as={Link} to={path} active={activePath}>
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

export default withRouter(HeaderNavbar);
