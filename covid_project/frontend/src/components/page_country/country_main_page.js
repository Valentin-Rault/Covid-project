import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { Route, useHistory } from "react-router-dom";

import { ControlLayout } from "./control_layout";
import { Countries } from "./Countries";

export const MainCountry = () => {
  let history = useHistory();
  const [countryDetail, setCountryDetail] = useState({});

  const [cumulative, setCumulative] = useState(false);
  const [label, setLabel] = useState("/ Day");

  useEffect(() => {
    fetch("/api/country-list")
      .then((response) => response.json())
      .then((data) => setCountryDetail(data));
  }, []);

  const cumulativeHandleChange = (e) => {
    setCumulative(e.target.value);
    setLabel(e.target.value === "true" ? "Total" : "/ Day");
  };

  const countryHandleChange = (e) => {
    history.push(`/country/${e.target.value}`);
  };

  return (
    <div>
      <ControlLayout
        cumulativeHandleChange={cumulativeHandleChange}
        countryHandleChange={countryHandleChange}
        countryDetail={countryDetail}
      />
      <Route
        path={`/country/:countryCode`}
        render={(props) => {
          return (
            <Container>
              <Countries cumulative={cumulative} label={label} {...props} />
              <Countries
                death
                cumulative={cumulative}
                label={label}
                {...props}
              />
            </Container>
          );
        }}
      />
    </div>
  );
};
