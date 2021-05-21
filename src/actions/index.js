import merriamWebster from "../apis/merriamWebster";
import {
  WORD_SELECTED,
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL
} from "./types";

// currently only setting up reducer for getting data
export const selectWord = word => {
  return {
    type: WORD_SELECTED,
    payload: word
  };
};

// get data for headword
export const fetchSynonymsBegin = headword => async dispatch => {
  const response = await merriamWebster.get(
    `/cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`
  );
  dispatch({ type: FETCH_SYNONYMS_BEGIN, payload: response.data });
};

export const fetchSynonymsSuccess = synonyms => {
  return { type: FETCH_SYNONYMS_SUCCESS, payload: { synonyms } };
};

export const fetchSynonymsFail = error => {
  return { type: FETCH_SYNONYMS_FAIL, payload: { error } };
};

// export const fetchData = query => async dispatch => {
//   const response = await merriamWebster.get(
//     `/umpire?key=${process.env.REACT_APP_MERRIAM_WEBSTER}`
//   );
//   console.log(`the response: lafjks`);
//   dispatch({ type: FETCH_SYNONYMS_BEGIN, payload: response.data });
// };
