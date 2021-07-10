import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export const Countries = (props) => {
  const [countryRequest, setCountryRequest] = useState({
    date: "",
    country: "",
    cases: "",
    deaths: "",
  });

  let start = convert(props.startDate);
  let end = convert(props.endDate);

  let url =
    "/api/get-country" +
    "?code=" +
    props.match.params.countryCode +
    "&start_date=" +
    start +
    "&end_date=" +
    end;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryRequest({
          date: data.date_reported,
          country: data.country,
          cases:
            props.isCumulative === "true"
              ? data.cumulative_cases
              : data.new_cases,
          deaths:
            props.isCumulative === "true"
              ? data.cumulative_deaths
              : data.new_deaths,
        });
      });
  }, [props.location, props.isCumulative, props.startDate, props.endDate]);

  const { date, country, cases, deaths } = countryRequest;

  const labelData = props.isDeath ? "N° of Deaths" : "N° of Cases";
  const text = props.isDeath ? "Deaths in" : "Cases in";

  const state = {
    labels: date,
    datasets: [
      {
        label: `${labelData} ${props.label}`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(67,162,202,1)",
        borderWidth: 2,
        data: props.isDeath ? deaths : cases,
      },
    ],
  };

  return (
    <div className="row-sm mb-5">
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: `${text} ${country} ${props.label}`,
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

const convert = (obj) => {
  var months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    },
    str = String(obj);
  var date = str.split(" ");

  return [date[3], months[date[1]], date[2]].join("-");
};
