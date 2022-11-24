import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/_controls/Navigation";
import { Footer } from "./Components/_controls/Footer";
import { Routes, Route } from "react-router-dom";
import { Catalog } from "./Pages/Catalog";
import { Contacts } from "./Pages/Contacts";
import { Faq } from "./Pages/Faq";

function App() {
  return (
    <div className="App">
      <div className="content_container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
