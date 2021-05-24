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
  treeData: [],
  headword: "cool"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SYNONYMS_BEGIN:
      console.log(state.treeData)
      return { ...state, loading: true, error: null };
    case FETCH_SYNONYMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        treeData: action.payload
      };
    case FETCH_SYNONYMS_FAIL:
      // y/n -- override existing data when error
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
