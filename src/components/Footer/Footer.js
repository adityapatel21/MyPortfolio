import React from "react";
import "./Footer.css";
import SpotifyNowPlaying from "../UI_Elements/SpotifyNowPlaying/SpotifyNowPlaying";

const Footer = () => {
  return (
    <div>
      <div className="footer-body">
        <div className="footer-body-container">
          <div className="footer-body-about">
            <h3>ADITYA KUMAR PATEL</h3>
            <p>Coder, Based in India</p>
          </div>
          <div className="footer-body-spotify">
            <SpotifyNowPlaying song="Par Chanaa de By Shipa Rao & Noori" />
          </div>
        </div>
        <div className="footer-horizontal-rule"></div>
        <div className="footer-body-copyright-text">
          © Copyright 2023. Made by Aditya Kumar Patel
        </div>
      </div>
    </div>
  );
};

export default Footer;
