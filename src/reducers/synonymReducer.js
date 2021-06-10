import {
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL,
  SET_HEADWORD
} from "../actions/types";
import * as am4core from "@amcharts/amcharts4/core";

const INITIAL_STATE = {
  loading: null,
  error: null,
  treeData: {},
  headword: "happy"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SYNONYMS_BEGIN:
      console.log(`in FETCH_SYNONYMS_BEGIN reducer`);
      return { ...state, loading: true, error: null };
    case FETCH_SYNONYMS_SUCCESS:
      console.log(`in FETCH_SYNONYMS_SUCCESS reducer`);
      //debugger;
      let updatedChart = toTreeData(
        action.headword,
        action.payload[0].shortdef,
        action.payload[0].meta.syns
      );
      return {
        ...state,
        headword: action.headword,
        loading: false,
        error: null,
        treeData: updatedChart
      };
    case FETCH_SYNONYMS_FAIL:
      // y/n -- override existing data when error
      console.log(JSON.stringify(action.payload));
      return { ...state, loading: false, error: action.payload };
    case SET_HEADWORD:
      return { ...state, headword: action.payload };
    default:
      return state;
  }
};

const newSynNode = word => {
  return { name: word, value: 1 };
};

const newDefNode = definition => {
  return { name: definition, children: [] };
};
const newHeadWordNode = word => {
  return {
    name: word,
    fixed: true,
    x: am4core.percent(50),
    y: am4core.percent(20),
    children: []
  };
};

const toTreeData = (headword, shortDefs, synonyms) => {
  let shapedData = newHeadWordNode(headword);
  for (let [i, def] of shortDefs.entries()) {
    let currDefNode = newDefNode(def);
    currDefNode.children = synonyms[i].map(word => newSynNode(word));
    shapedData.children.push(currDefNode);
  }

  return shapedData;
};
