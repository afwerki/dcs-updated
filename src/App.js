import React from "react";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import SmartTools from "./components/SmartTools";
import Footer from "./components/Footer";
// import Compaines from "./components/Compaines";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SmartTools />
      <Resources />
      {/* <Compaines/> */}
      <AboutUs />
      <ContactUs/>
     
      <Footer/>
    </div>
  );
}

export default App;
