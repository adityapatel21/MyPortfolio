import React from "react";
import "./SolidButton.css";

const SolidButton = (props) => {
  return (
    <>
      <a className="button-solid" href={props.link}>
        {props.text}
      </a>
    </>
  );
};

export default SolidButton;
