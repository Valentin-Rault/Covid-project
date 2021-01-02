import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./page_header/header";
import { Homepage } from "./HomePage";
import { Footer } from "./page_footer/footer";
import { MainCountry } from "./page_country/country_main_page";
import { MainCompare } from "./compare_countries/main_compare_countries";

export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/country">
            <MainCountry />
          </Route>
          <Route path="/compare-countries">
            <MainCompare />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
