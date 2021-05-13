import {combineReducers} from 'redux';

// returns hard-coded data,
// eventually will use to call api i think
const wordDataReducer = () => {
 return {
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
}
}

export default combineReducers({
  wordData: wordDataReducer
})