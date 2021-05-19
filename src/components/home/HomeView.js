import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
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

  const fetchSynonyms = async query => {
    const response = await merriamWebster.get(
      `cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`
    );
    console.log(JSON.stringify(response, null, 2));
  };

  return (
    <div>
      <br></br>
      <button onClick={fetchSynonyms}>fetchSynonyms</button>
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
