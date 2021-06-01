import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { SynonymTree } from "./SynonymTree";
import { SearchBox } from "./SearchBox";
import { fetchSynonymsBegin } from "../../actions";

export const HomeView = () => {
  const dispatch = useDispatch();

  const fetch = word => fetchSynonymsBegin(word)(dispatch);

  // run initial
  useEffect(() => {
    fetch("happy");
  }, []);

  const handleSearch = () => {
    fetch("happy");
  };

  return (
    <div>
      <SearchBox />
      <button onClick={handleSearch}>fetchSynonyms</button>
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
