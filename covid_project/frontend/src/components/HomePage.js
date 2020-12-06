import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
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
    US: 20
  };

  const handleClick = (e) => {
    e.preventDefault();
    <Link to='/countries' />;
  };

  const Map = () => {
    return (
      <div>
        <Card>
        <Card.Body>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" //color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#146804", "#ff0000"], //your color game's here
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
        <Card.Footer className='text-muted'>World Map</Card.Footer>
        </Card.Body>
        </Card>
      </div>
    );
  };
  

export const Homepage = () => {
    return (
        <div>
            <div>This is the homepage</div>
            <div><Map /></div>
        </div>
    );
}