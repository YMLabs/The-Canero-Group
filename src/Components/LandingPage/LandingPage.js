import React from "react";
import ExploreAllThingsProperty from "./ExploreAllThingsProperty/ExploreAllThingsProperty";
import ExploreHomeLoans from "./ExploreHomeLoans/ExploreHomeLoans";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Prefooter from "./Prefooter/Prefooter";
import PropertyNews from "./PropertyNews/PropertyNews";
import Social from "./Social/Social";

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="px-16">
        <ExploreAllThingsProperty />
        <PropertyNews />
      </div>
      <ExploreHomeLoans />
      <div className="px-16">
        <Prefooter />
        <Social />
      </div>
        <Footer />
    </div>
  );
}

export default LandingPage;
