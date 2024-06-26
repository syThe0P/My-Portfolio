import React from "react";
import './App.css'
import Header from './components/header/Header'
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Services />
        <Qualification />
        <Work />
        <Contact />
        <ScrollUp/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
