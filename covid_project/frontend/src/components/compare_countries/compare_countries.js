import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export const Countries = ({
  isCumulative,
  isDeath,
  firstCountryCode,
  secondCountryCode,
  startDate,
  endDate,
}) => {
  let start = convert(startDate);
  let end = convert(endDate);

  let firstCountryUrl =
    "/api/get-country" +
    "?code=" +
    firstCountryCode +
    "&start_date=" +
    start +
    "&end_date=" +
    end;
  const firstCountry = fetchAPI(
    firstCountryUrl,
    firstCountryCode,
    isCumulative,
    startDate,
    endDate
  );

  let secondCountryUrl =
    "/api/get-country" +
    "?code=" +
    secondCountryCode +
    "&start_date=" +
    start +
    "&end_date=" +
    end;
  const secondCountry = fetchAPI(
    secondCountryUrl,
    secondCountryCode,
    isCumulative,
    startDate,
    endDate
  );

  // const { firstDate, firstCountryName, firstCases, firstDeaths } = firstCountry;
  // const {
  //   _secondDate,
  //   secondCountryName,
  //   secondCases,
  //   secondDeaths,
  // } = secondCountry;

  const labelData = isDeath ? "N° of Deaths" : "N° of Cases";
  const labelCumulative = isCumulative ? "Total" : "Per Day";
  const text = isDeath ? "Deaths in" : "Cases in";

  const state = {
    labels: firstCountry.date,
    datasets: [
      {
        label: `${text} ${firstCountry.country}`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(67,162,202,1)",
        borderWidth: 2,
        data: isDeath ? firstCountry.deaths : firstCountry.cases,
      },
      {
        label: `${text} ${secondCountry.country}`,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(168,221,181,1)",
        borderWidth: 2,
        data: isDeath ? secondCountry.deaths : secondCountry.cases,
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
            text: `${labelData} ${labelCumulative}`,
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

const fetchAPI = (url, countryCode, isCumulative, startDate, endDate) => {
  const [obj, setObj] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setObj({
          date: data.date_reported,
          country: data.country,
          cases:
            isCumulative === "true" ? data.cumulative_cases : data.new_cases,
          deaths:
            isCumulative === "true" ? data.cumulative_deaths : data.new_deaths,
        });
      });
  }, [countryCode, isCumulative, startDate, endDate]);
  console.log(obj);

  return obj;
};
