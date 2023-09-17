// Component Import
import HomeIntro from "./HomeIntro/HomeIntro.js";
import Navbar from "./Navbar/Navbar.js";
import SocialCard from "./UI_Elements/SocialCard/SocialCard.js";
import Footer from "./Footer/Footer.js";
import About from "./About/About.js";
import Project from "./Projects/Project.js";
import Contact from "./Contact/Contact.js";
import Loader from "./UI_Elements/Loader/Loader.js";
import { useState } from "react";

import React from "react";

const Home = () => {
  const [loading, setloading] = useState(false);
  return (
    <div>
      <>
        <Navbar />
        <HomeIntro />
        <About />
        <Project />
        <Contact setloading={setloading} />
        <Footer />
        <SocialCard />
        {loading && <Loader />}
      </>
    </div>
  );
};

export default Home;
