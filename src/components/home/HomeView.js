import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SynonymTree } from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";
import { Header } from "./Header";
import "./HomeStyles.css";

export const HomeView = () => {
  const headword = useSelector(state => state.synonyms.headword);
  const dispatch = useDispatch();

  const fetch = word => fetchSynonymsBegin(word)(dispatch);

  // run initial
  useEffect(() => {
    fetch(headword);
  }, [headword]);

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
