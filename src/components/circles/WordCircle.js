import React from "react";
import WordContainer from "./WordContainer";
import "./WordCircle.css";

const WordCircle = props => {
  return (
    <WordContainer >
      <text>{props.word}</text>
    </WordContainer>
  );
};

export default WordCircle;
