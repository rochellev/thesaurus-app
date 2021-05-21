import {
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL
} from "../actions/types";

// begin as in loading

const INITIAL_STATE = {
  loading: null,
  fetchSuccess: null,
  error: null,
  data: {},
  treeData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SYNONYMS_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_SYNONYMS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case FETCH_SYNONYMS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
