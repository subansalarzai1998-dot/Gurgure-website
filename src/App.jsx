import Home from "./Pages/Home/Home";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
