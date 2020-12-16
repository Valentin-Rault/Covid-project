import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export const Countries = (props) => {
  const [countryRequest, setCountryRequest] = useState({
    date: "",
    country: "",
    newCases: "",
  });
  const [countryCode, setCountryCode] = useState(
    props.match.params.countryCode
  );
  useEffect(() => {
    fetch("/api/get-country" + "?code=" + countryCode)
      .then((response) => response.json())
      .then((data) => {
        setCountryRequest({
          date: data.date_reported,
          country: data.country,
          newCases: data.new_cases,
          newDeaths: data.new_deaths,
        });
      });
  }, [countryCode]);

  const { date, country, newCases, newDeaths } = countryRequest;

  const state = {
    labels: date,
    datasets: [
      {
        label: props.death ? "New Deaths / Day" : "New Cases / Day",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.death ? newDeaths : newCases,
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
              ? "New Deaths in " + `${country}`
              : "New Cases in " + `${country}`,
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
