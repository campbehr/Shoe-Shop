import React from "react";
import { Link } from "react-router-dom";
import "./header.styels.css";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <figure className="logo">Shoe Maverick</figure>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP ALL
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
