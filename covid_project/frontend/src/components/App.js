import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { Header } from "./page_header/header";
import { Homepage } from "./HomePage";
import { Footer } from "./page_footer/footer";
import { MainCountry } from "./page_country/country_main_page";

export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Card>
              <Card.Body>
                <Homepage />
                <Card.Footer className="text-muted">World Map</Card.Footer>
              </Card.Body>
            </Card>
          </Route>
          <Route path="/country">
            <MainCountry />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
