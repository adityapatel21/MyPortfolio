import React from "react";
import "./ProjectItem.css";
import OverLineButton from "../../UI_Elements/Buttons/OverLineButton/OverLineButton";
// import SolidButton from "../../UI_Elements/Buttons/SolidButton/SolidButton";

const ProjectItem = (props) => {
  return (
    <div key={props.id} className="project-item-container">
      <div className="project-item-image">
        <img
          src={props.ImageLink}
          alt="Loading Error"
          className="project-image"
        />
      </div>
      <div className="project-text-description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="project-teckstack">
          {props.techstack.map((item) => {
            return (
              <div key={item} className="techstack-item">
                {item}
              </div>
            );
          })}
        </div>
        <div className="project-item-buttons">
          <OverLineButton text="Github Link" link={props.link} />
          {/* <SolidButton text="Know more" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
