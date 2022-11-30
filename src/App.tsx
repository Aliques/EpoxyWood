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
import { Layout } from "./Components/Layout";
import { Product } from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<Product />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
