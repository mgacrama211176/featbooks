import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ContactUs from "../components/ContactUs/ContactUs";
const Home = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
