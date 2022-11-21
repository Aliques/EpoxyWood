import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Controls/Navigation";
import { Footer } from "./Components/Controls/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
