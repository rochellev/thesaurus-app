import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchBox } from "./SearchBox";
import "./HomeStyles.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="app-title">Thesaurus For Us</h1>
      </div>
   
        <SearchBox  />
     
    </div>
  );
};
