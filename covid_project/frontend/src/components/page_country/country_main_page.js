import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Route } from "react-router-dom";

import { ControlLayout } from "./control_layout";
import { Countries } from "./Countries";

export const MainCountry = () => {
  const [cumulative, setCumulative] = useState(false);
  const [label, setLabel] = useState("/ Day");

  function yesterday(d) {
    new Date(d.setDate(d.getDate() - 1));
    return d;
  }
  const [startDate, setStartDate] = useState(new Date("2020/01/03"));
  const [endDate, setEndDate] = useState(yesterday(new Date()));

  const cumulativeHandleChange = (e) => {
    setCumulative(e.target.value);
    setLabel(e.target.value === "true" ? "Total" : "/ Day");
  };

  const changeStartDate = (date) => {
    setStartDate(date);
  };

  const changeEndDate = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <ControlLayout
        cumulativeHandleChange={cumulativeHandleChange}
        startDate={startDate}
        endDate={endDate}
        changeStartDate={changeStartDate}
        changeEndDate={changeEndDate}
      />
      <Route
        path={`/country/:countryCode`}
        render={(props) => {
          return (
            <Container>
              <Countries
                isCumulative={cumulative}
                label={label}
                startDate={startDate}
                endDate={endDate}
                {...props}
              />
              <Countries
                isDeath
                isCumulative={cumulative}
                label={label}
                startDate={startDate}
                endDate={endDate}
                {...props}
              />
            </Container>
          );
        }}
      />
    </div>
  );
};
