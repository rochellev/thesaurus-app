import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  "./HomeStyles.css";

export const Header = () => {
  return (
    <div className="appTitle">
      <div >
        <h1>Thesaurus for Us</h1>
      </div>
    </div>
  );
};
