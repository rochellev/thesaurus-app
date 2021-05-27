import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";
import SearchFrom from './SearchForm'

const HomeView = ({ fetchSynonymsBegin, synonyms }) => {
  // run initial
  // useEffect(() => {
  //   fetchSynonymsBegin("happy");
  // }, []);

  const handleSearch = () => {
    fetchSynonymsBegin("happy");
  };

  return (
    <div>
      <button onClick={handleSearch}>fetchSynonyms</button>
      <SearchFrom />
      <br></br>
      <SynonymTree />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    synonyms: state.synonyms
  };
};
export default connect(mapStateToProps, { fetchSynonymsBegin })(HomeView);
