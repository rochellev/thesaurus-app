import {
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL
} from "../actions/types";

// const INITIAL_STATE = {
//   loading: null,
//   error: null,
//   data: {
//     headword: "cool",
//     treeData: []
//   }
// };
const INITIAL_STATE = {
  loading: null,
  error: null,
  data: {},
  treeData: {},
  headword: "cool"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SYNONYMS_BEGIN:
      console.log(`in FETCH_SYNONYMS_BEGIN reducer`);
      return { ...state, loading: true, error: null };
    case FETCH_SYNONYMS_SUCCESS:
      console.log(`in FETCH_SYNONYMS_SUCCESS reducer`);
      // console.log(`action.payload[0]:  \n${JSON.stringify(action.payload[0])}`);
      let updatedChart = toTreeData(
        state.headword,
        action.payload[0].shortDefs,
        action.payload[0].meta.syns
      );
      console.log(`updatedChart:   \n${JSON.stringify(updatedChart, null, 2)}`);
      return {
        ...state,
        loading: false,
        error: null,
        treeData: updatedChart
      };
    case FETCH_SYNONYMS_FAIL:
      // y/n -- override existing data when error
      console.log(JSON.stringify(action.payload));
      return { ...state, loading: false, error: action.payload };
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

const toTreeData = (headword, shortDefs, synonyms) => {
  let shapedData = newDefNode(headword);
  for (let [i, def] of shortDefs.entries()) {
    let currDefNode = newDefNode(def);
    currDefNode.children = synonyms[i].map(word => newSynNode(word));
    shapedData.children.push(currDefNode);
  }
  console.log(`shapedData:   \n${JSON.stringify(shapedData, null, 2)}`);
  return shapedData;
};
