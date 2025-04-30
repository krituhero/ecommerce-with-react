import React from "react";
import Header from "./components/Header";
import "./index.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Flashsales from "./components/Flashsales";
import Categories from "./components/categories";
import Services from "./components/Services";

function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Flashsales />
      <Categories />
      <Services />
      <Footer />
    </>
  );
}

export default Index;
