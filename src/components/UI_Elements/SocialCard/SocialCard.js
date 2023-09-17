import React from "react";
import "./SocialCard.css";

const SocialCard = () => {
  return (
    <div className="social-card-container">
      <div className="social-card-icon">
        <a
          href="https://www.linkedin.com/in/aditya-kumar-patel-74b917195/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="social-card-icon">
        <a
          href="https://github.com/adityapatel21"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>
      <div className="social-card-icon">
        <a
          href="https://twitter.com/kumar___aditya"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-square-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
