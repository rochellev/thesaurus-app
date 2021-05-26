import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";


const HomeView = ({ fetchSynonymsBegin, synonyms }) => {

  // run initial
  useEffect(() => {
    fetchSynonymsBegin("happy");
  }, []);



  const handleSearch = () => {
    fetchSynonymsBegin("happy");
  };

  const renderSynonymTree = chartData => {
    return <SynonymTree seriesData={chartData} />;
  };

  return (
    <div>
      <button onClick={handleSearch}>fetchSynonyms</button>
      <br></br>
      {renderSynonymTree(chartData)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    wordData: state.wordData,
    synonyms: state.synonyms
  };
};
export default connect(mapStateToProps, { fetchSynonymsBegin })(HomeView);
