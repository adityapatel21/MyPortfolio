// CSS
import "./App.css";

// Component Import
// import HomeIntro from "./components/HomeIntro/HomeIntro.js";
import Navbar from "./components/Navbar/Navbar.js";
// import SocialCard from "./components/UI_Elements/SocialCard/SocialCard.js";
// import Footer from "./components/Footer/Footer.js";
// import About from "./components/About/About.js";
// import Project from "./components/Projects/Project.js";
// import Contact from "./components/Contact/Contact.js";
// import Loader from "./components/UI_Elements/Loader/Loader.js";
// import { useState } from "react";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
