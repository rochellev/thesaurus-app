import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchBox } from "./SearchBox";
import "./HomeStyles.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="app-title">
        Thesaurus for Us
      </div>
      <div className="search">
        <SearchBox />
      </div>
    </div>
  );
};
