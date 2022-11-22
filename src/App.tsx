import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/_controls/Navigation";
import { Footer } from "./Components/_controls/Footer";
import { Routes, Route } from "react-router-dom";
import { CatalogPage } from "./Pages/CatalogPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
