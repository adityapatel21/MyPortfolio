import React from "react";
import "./About.css";

const About = () => {
  const skillsArray = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Java",
    "Python",
    "Pandas",
    "Figma",
  ];

  return (
    <div id="about" className="about-body">
      <div className="about-container">
        <div className="about-heading">
          <h2>About</h2>
          <div className="about-heading-underline"></div>
        </div>
        <div className="about-text">
          <div className="about-text-info">
            <h3>Get to Know me !</h3>
            <p>
              I'm a Coder specialize in building websites using the{" "}
              <strong>MERN stack</strong>. I also have a passion for exploring{" "}
              <strong>data to find useful information</strong>.Check out some of
              my projects in project section.
            </p>
            <p>
              In my free time, I enjoy solving puzzles, especially Data
              Structures and Algorithms problems. I like sharing my solutions
              with others, and you can see my work on my{" "}
              <span>
                <a
                  href="https://leetcode.com/adityaKpatel/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LeetCode
                </a>
              </span>{" "}
              profile.
            </p>
            <p>
              I'm currently on the lookout for job opportunities where I can
              learn and grow. If you know of any exciting opportunities that
              match my skills and experience, please don't hesitate to get in
              touch. You're also welcome to connect with me on{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-patel-74b917195/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>{" "}
              to stay updated on my professional journey.
            </p>
          </div>
          <div className="about-text-skill">
            <h3>My Skills</h3>
            {skillsArray.map((skill) => {
              return (
                <div className="about-skill-button" key={skill}>
                  <div className="about-skill-button-text">{skill}</div>
                </div>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
