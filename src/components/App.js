import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
// import HomeView from "./home/HomeView";
import SynonymTree from "./home/SynonymTree";
import { fetchSynonymsBegin } from "../actions";

const App = () => {
  useEffect(() => {
    fetchSynonymsBegin("happy");
  }, []);
  return (
    <div className="App">
      <SynonymTree />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    wordData: state.wordData
  };
};

export default connect(mapStateToProps, { fetchSynonymsBegin })(App);
