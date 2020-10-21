import React from "react";
import { connect } from "react-redux";
import { toggleMenuHidden } from "../../redux/header/header.actions";

import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";

import "./hamburger.styles.css";

const Hamburger = ({ toggleMenuHidden, hideMenu }) => {
  return (
    <div className="hamburger-wrapper">
      <div className="hamburger" onClick={() => toggleMenuHidden()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {hideMenu ? null : <HamburgerMenu />}
    </div>
  );
};

const mapStateToProps = ({ header: { hideMenu } }) => ({
  hideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuHidden: () => dispatch(toggleMenuHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
