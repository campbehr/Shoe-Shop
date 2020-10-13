import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.styels.css";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;