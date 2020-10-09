import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const MensPage = () => (
  <div>
    <h1>Mens Shoes</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
