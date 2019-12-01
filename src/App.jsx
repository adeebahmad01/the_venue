import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Location from "./components/location";
import Pricing from "./components/pricing";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";
import "./resources/styles.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <Element name="feature">
        <Featured />
      </Element>
      <Element name="info">
        <VenueInfo />
      </Element>
      <Element name="highlight">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}
export default App;
