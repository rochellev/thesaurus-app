import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { SynonymTree } from "./SynonymTree";
import { SearchBox } from "./SearchBox";
import { fetchSynonymsBegin } from "../../actions";
import { Header } from "./Header";

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
    <div>
      <div>
        <Header />
        <SearchBox />
      </div>

      <div>
        <SynonymTree />
      </div>
    </div>
  );
};
