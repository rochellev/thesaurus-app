import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { SynonymTree } from "./SynonymTree";

import { fetchSynonymsBegin } from "../../actions";
import { Header } from "./Header";
import "./HomeStyles.css";

export const HomeView = () => {
  const headword = useSelector(state => state.synonyms.headword);
  const dispatch = useDispatch();

  const fetch = word => fetchSynonymsBegin(word)(dispatch);

  // run initial
  // useEffect(() => {
  //   fetch(headword);
  // }, [headword]);

  const handleSearch = () => {
    fetch("happy");
  };

  return (
    <div className="home-view">
      <div className="header-container">
        <Header />
        
      </div>

      <div className="synonym-tree-container">
        <SynonymTree />
      </div>
    </div>
  );
};
