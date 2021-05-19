import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
import { fetchSynonymsBegin } from "../../actions";
import merriamWebster from "../../apis/merriamWebster";

const HomeView = ({ wordData }) => {
  const [chartData, setChartData] = useState([
    {
      name: wordData.headword,
      children: []
    }
  ]);
  // run initial
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

  return (
    <div>
      <br></br>
      <SynonymTree seriesData={chartData} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    wordData: state.wordData
  };
};
export default connect(mapStateToProps)(HomeView);
