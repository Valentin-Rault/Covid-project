import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export const Countries = (props) => {
  const [countryRequest, setCountryRequest] = useState({
    date: "",
    country: "",
    cases: "",
    deaths: "",
  });

  // const [countryCode, setCountryCode] = useState(
  //   props.match.params.countryCode
  // );

  useEffect(() => {
    fetch("/api/get-country" + "?code=" + props.match.params.countryCode)
      .then((response) => response.json())
      .then((data) => {
        setCountryRequest({
          date: data.date_reported,
          country: data.country,
          cases:
            props.cumulative === "true"
              ? data.cumulative_cases
              : data.new_cases,
          deaths:
            props.cumulative === "true"
              ? data.cumulative_deaths
              : data.new_deaths,
        });
      });
  }, [props.location, props.cumulative]);

  const { date, country, cases, deaths } = countryRequest;

  const state = {
    labels: date,
    datasets: [
      {
        label: props.death
          ? "N° of Deaths " + `${props.label}`
          : "N° of Cases " + `${props.label}`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.death ? deaths : cases,
      },
      //   {
      //     label: "Death cases / Day",
      //     fill: false,
      //     lineTension: 0.5,
      //     backgroundColor: "rgba(75, 192, 192, 1)",
      //     borderColor: "rgba(0, 0, 0, 1)",
      //     borderWidth: 2,
      //     data: newDeaths,
      //   },
    ],
  };

  return (
    <div className="row-sm mb-5">
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: props.death
              ? "Deaths in " + `${country}`
              : "Cases in " + `${country}`,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
