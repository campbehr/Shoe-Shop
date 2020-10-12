import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.css";

const HomePage = () => (
  <div className="homepage">
    <div
      className="heroImage"
      style={{
        backgroundImage: "url(images/hero.jpg)",
      }}
    />
    <Directory />
  </div>
);

export default HomePage;
