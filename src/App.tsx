import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Controls/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Home />
    </div>
  );
}

export default App;
