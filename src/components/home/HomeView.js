import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { SynonymTree } from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";
import SearchFrom from "../../exampleForms/SimpleExample";
import SynchErrorExample from "../../exampleForms/SynchErrorExample";

export const HomeView = () => {
  const dispatch = useDispatch();

  const fetch = (word) => fetchSynonymsBegin(word)(dispatch);

  // run initial
  useEffect(() => {
    fetch("happy");
  }, []);

  const handleSearch = () => {
    fetch("happy");
  };

  return (
    <div>
      <button onClick={handleSearch}>fetchSynonyms</button>
      <SynchErrorExample />
      <br></br>
      <SynonymTree />
    </div>
  );
};

/*const mapStateToProps = state => {
  return {
    synonyms: state.synonyms
  };
};
export default connect(mapStateToProps, { fetchSynonymsBegin })(HomeView);*/
