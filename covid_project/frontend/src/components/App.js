import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries } from "./Countries";
import { Header } from "./page_header/header";
import { Homepage } from "./HomePage";
import { Footer } from "./page_footer/footer";

export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route
            path="/country/:countryCode"
            render={(props) => {
              return (
                <div className="container">
                  <div className="col">
                    <Countries {...props} />
                    <Countries {...props} />
                  </div>
                </div>
              );
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
