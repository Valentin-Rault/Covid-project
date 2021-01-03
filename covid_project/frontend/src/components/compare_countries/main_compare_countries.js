import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { CompareControlLayout } from "./compare_control_layout";
import { Countries } from "./compare_countries";

export const MainCompare = () => {
  const [isCumulative, setIsCumulative] = useState(false);
  const [firstCountryCode, setFirstCountryCode] = useState("DK");
  const [secondCountryCode, setSecondCountryCode] = useState("FR");

  function yesterday(d) {
    new Date(d.setDate(d.getDate() - 1));
    return d;
  }
  const [startDate, setStartDate] = useState(new Date("2020/01/03"));
  const [endDate, setEndDate] = useState(yesterday(new Date()));

  const cumulativeHandleChange = (e) => {
    setIsCumulative(e.target.value);
    // setLabel(e.target.value === "true" ? "Total" : "/ Day");
  };

  const firstCountryChange = (e) => {
    setFirstCountryCode(e.target.value);
    console.log(firstCountryCode);
  };

  const secondCountryChange = (e) => {
    setSecondCountryCode(e.target.value);
  };

  const changeStartDate = (date) => {
    setStartDate(date);
  };

  const changeEndDate = (date) => {
    setEndDate(date);
  };
  return (
    <div>
      <CompareControlLayout
        cumulativeHandleChange={cumulativeHandleChange}
        firstCountryChange={firstCountryChange}
        secondCountryChange={secondCountryChange}
        firstCountryCode={firstCountryCode}
        secondCountryCode={secondCountryCode}
        startDate={startDate}
        endDate={endDate}
        changeStartDate={changeStartDate}
        changeEndDate={changeEndDate}
      />
      <Container>
        <Countries
          isCumulative={isCumulative}
          isDeath={false}
          firstCountryCode={firstCountryCode}
          secondCountryCode={secondCountryCode}
          startDate={startDate}
          endDate={endDate}
        />
        <Countries
          isCumulative={isCumulative}
          isDeath={true}
          firstCountryCode={firstCountryCode}
          secondCountryCode={secondCountryCode}
          startDate={startDate}
          endDate={endDate}
        />
      </Container>
    </div>
  );
};
