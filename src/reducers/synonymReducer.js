import {
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  fetchBegin: null,
  fetchSuccess: null,
  fetchFail: null,
  data: {},
  treeData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SYNONYMS_BEGIN:
      return { ...state, synonyms: action.payload };
    default:
      return state;
  }
};
