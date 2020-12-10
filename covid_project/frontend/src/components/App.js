import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries } from "./Countries";
import { Header } from "./page_header/header";
import { Homepage } from "./HomePage";
import { Footer } from "./page_footer/footer";

function C() {
  const [x, setX] = useState(0);
  return (
    <Switch>
      <Route exact path="/">
        I am up here
      </Route>
      <Route path="/countries">Here as well (countries)</Route>
      {/* <Route path='/compare' component={CompareCountries}></Route> */}
    </Switch>
  );
}

export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/countries">
            <div className="container">
              <div className="row">
                <Countries />
                <Countries />
              </div>
            </div>
          </Route>
          {/* <Route path='/compare' component={CompareCountries}></Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
