import React from "react";
import "./WordCircle";

const WordContainer = props => {
  return <div className="circle-container">{props.children}</div>;
};

export default WordContainer;
