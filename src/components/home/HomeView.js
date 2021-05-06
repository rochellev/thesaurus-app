import React from "react";
import WordCircle from "../circles/WordCircle";
import SynonymTree from "./SynonymTree";

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
  const getWordVal = word => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i);
    }
    return sum;
  };
  // chart expects numerical value, convert string to val
  const transformedData = (data, senseIndex) => {
    let result = [{ name: data.headword, children: [] }];
    for (let word of data.syn_list[senseIndex].syns) {
      if (result[0].children.length >= 7) {
        break;
      }
      result[0].children.push({ name: word, value: getWordVal(word) });
    }
    // console.log(`transformedData: ${JSON.stringify(result)}`);
    return result;
  };

  return (
    <div>
      <br></br>
      <h1>{data.headword}</h1>
      <h3>({data.syn_list[1].definition})</h3>
      <SynonymTree seriesData={transformedData(data, 1)} />
    </div>
  );
};

export default HomeView;
