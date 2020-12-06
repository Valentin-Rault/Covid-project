import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export function HeaderNavbar() {
  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top'>
      <Nav>
        <Nav.Item>
          <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Collapse id='basic-navbar-nav'/>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/countries'>Countries</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

// render(<Navbar />, navabarDiv);

{/* <Route exact path="/">
<div>
  <Link to="/">Home</Link>
  <Link to="/countries">Countries</Link>
</div>
</Route>
<Route path="/countries">
<div>
  <Link to="/">Home</Link>
  <Link to="/countries">HHahahaCountries</Link>
</div>
</Route> */}