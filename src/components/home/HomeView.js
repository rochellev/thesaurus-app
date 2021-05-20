import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";
import merriamWebster from "../../apis/merriamWebster";

const HomeView = ({ wordData, synonyms }) => {
  const [chartData, setChartData] = useState([
    {
      name: wordData.headword,
      children: []
    }
  ]);
  // run initial
  useEffect(() => {
    fetchSynonymsBegin("happy");
  }, []);
  useEffect(() => {
    let currData = chartData;
    // for each sense
    // make new obj with def and synonyms
    // push that to root node children
    for (let senseObj of wordData.syn_list) {
      let sense = { name: senseObj.definition, value: 50, children: [] };
      for (let [i, synonym] of senseObj.syns.entries()) {
        sense.children.push({ name: synonym, value: i });
      }
      currData[0].children.push(sense);
    }

    setChartData(currData);
  }, []);

  // const showSyns = synonyms => {
  //   return;
  // };
  const handleSearch = () => {
    fetchSynonymsBegin("happy");
  };

  return (
    <div>
      <button onClick={() => handleSearch()}>fetchSynonyms</button>
      <br></br>
      <SynonymTree seriesData={chartData} />
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
