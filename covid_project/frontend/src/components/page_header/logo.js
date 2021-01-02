import React from "react";
import Link from "react-router-dom/Link";

import logo from "../../../static/images/logo.jpeg";

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo"></img>
    </Link>
  );
}
