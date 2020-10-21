import React from "react";
import { Link } from "react-router-dom";

import "./header.styels.css";

import HeaderMenu from "../header-menu/header-menu.component";
import Hamburger from "../hamburger/hamburger.component";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <figure className="logo">Shoe Maverick</figure>
    </Link>
    <HeaderMenu />

    <Hamburger />
  </div>
);

export default Header;
