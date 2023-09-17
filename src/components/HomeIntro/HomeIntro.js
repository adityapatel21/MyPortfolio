import React from "react";
import "./HomeIntro.css";
import SolidButton from "../UI_Elements/Buttons/SolidButton/SolidButton";

const HomeIntro = () => {
  return (
    <>
      <div id="homeIntro">
        <div className="home-intro-body">
          <div className="home-intro-container">
            <div className="home-intro-name">
              Hy. I'm <span>Aditya Kumar Patel</span>
            </div>
            <div className="home-intro-about">
              <p>
                I enjoy converting &#160;
                <span className="home-intro-about-monospace">
                  monospaced text&#160;
                </span>
                into &#160;
                <span className="home-intro-about-interactive">
                  interactive user interfaces &#160;
                </span>
                and transforming data into actionable insights.
              </p>
            </div>
            <SolidButton text="Projects" link="/#projects" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntro;
