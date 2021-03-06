import React from "react";
import { useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";

import { VectorMap } from "react-jvectormap";

const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20,
};

const Map = () => {
  let history = useHistory();

  const tips = document.getElementsByClassName("jvectormap-tip");

  const handleClick = (e, countryCode) => {
    for (var i = 0; i < tips.length; i++) {
      tips[i].style.display = "none";
    }
    history.push(`/country/${countryCode}`);
  };

  return (
    <VectorMap
      map={"world_mill"}
      backgroundColor="transparent" //change it to ocean blue: #0077be
      zoomOnScroll={false}
      containerStyle={{
        width: "100%",
        height: "520px",
      }}
      onRegionClick={handleClick} //gets the country code
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0,
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: "pointer",
        },
        selected: {
          fill: "#2938bc", //color for the clicked country
        },
        selectedHover: {},
      }}
      regionsSelectable={true}
      series={{
        regions: [
          {
            values: mapData, //this is your data
            scale: ["#146804", "#ff0000"], //your color game's here
            normalizeFunction: "polynomial",
            legend: {
              vertical: true,
              title: "infection rate / 100.000",
            },
          },
        ],
      }}
    />
  );
};

export const Homepage = () => {
  return (
    <Card>
      <Card.Body>
        <Map />
        <Card.Footer className="text-muted">World Map</Card.Footer>
      </Card.Body>
    </Card>
  );
};
