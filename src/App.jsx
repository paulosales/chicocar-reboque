import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header id="header" />
      <About id="about" />
      <Map id="map" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
