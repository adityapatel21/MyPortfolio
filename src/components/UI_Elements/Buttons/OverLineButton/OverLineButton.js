import React from "react";
import "./OverLineButton.css";

const OverLineButton = (props) => {
  return (
    <>
      <a
        className="button-overline"
        href={props.link}
        rel="noreferrer"
        target="_blank"
      >
        {props.text}
      </a>
    </>
  );
};

export default OverLineButton;
