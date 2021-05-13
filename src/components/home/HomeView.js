import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SynonymTree from "./SynonymTree";
import { selectWord } from "../../actions";
// sample input: cool
const data = {
  headword: "cool",
  syn_list: [
    {
      definition:
        "having or showing a lack of friendliness or interest in others",
      syns: [
        "aloof",
        "antisocial",
        "asocial",
        "buttoned-up",
        "cold",
        "cold-eyed, detached",
        "distant",
        "dry",
        "frosty",
        "offish",
        "remote",
        "standoff",
        "standoffish",
        "unbending",
        "unclubbable",
        "unsociable"
      ]
    },
    {
      definition: "free from emotional or mental agitation",
      syns: [
        "calm",
        "collected",
        "composed",
        "coolheaded",
        "equal",
        "level",
        "limpid",
        "peaceful",
        "placid",
        "possessed",
        "recollected",
        "sedate",
        "self-composed",
        "self-possessed",
        "serene",
        "smooth",
        "together",
        "tranquil",
        "undisturbed",
        "unperturbed",
        "unruffled",
        "unshaken",
        "untroubled",
        "unworried"
      ]
    },
    {
      definition: "having a low or subnormal temperature",
      syns: [
        "algid",
        "arctic",
        "bitter",
        "bone-chilling, chill",
        "chilly, cold",
        "coldish",
        "coolish",
        "freezing",
        "frigid",
        "frosty",
        "gelid",
        "glacial",
        "ice-cold",
        "icy",
        "nipping",
        "nippy",
        "numbing",
        "polar",
        "shivery",
        "snappy",
        "wintry"
      ]
    },
    {
      definition: "lacking in friendliness or warmth of feeling",
      syns: [
        "antiseptic",
        "arctic",
        "brittle",
        "chill",
        "chilly",
        "clammy",
        "cold",
        "cold-blooded",
        "cold-eyed",
        "coldish",
        "frigid",
        "frosty",
        "frozen",
        "gelid",
        "glacial",
        "hard-eyed",
        "icy",
        "uncordial",
        "unfriendly",
        "unsympathetic",
        "wintry"
      ]
    },
    {
      definition: "(slang) being in the latest or current fashion",
      syns: [
        "à la mode",
        "au courant",
        "chic",
        "exclusive",
        "fashionable",
        "fresh [slang]",
        "happening",
        "hip",
        "in",
        "modish",
        "sharp",
        "smart",
        "snappy",
        "stylish",
        "supercool",
        "swell",
        "swish",
        "trendy",
        "voguish"
      ]
    }
  ]
};

const HomeView = () => {
  const [wordData, setWordData] = useState(data);
  const [chartData, setChartData] = useState([
    {
      name: data.headword,
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
  }, [chartData, wordData.syn_list]);

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
