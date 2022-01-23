import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import ChefsSection from "./components/ChefsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChefsSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
