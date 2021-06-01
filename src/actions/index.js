import merriamWebster from "../apis/merriamWebster";
import {
  WORD_SELECTED,
  FETCH_SYNONYMS_BEGIN,
  FETCH_SYNONYMS_SUCCESS,
  FETCH_SYNONYMS_FAIL
} from "./types";

// hard-coded data -- for developing
export const selectWord = word => {
  return {
    type: WORD_SELECTED,
    payload: word
  };
};

// fetch API data, handle success/error
export const fetchSynonymsBegin = headword => async dispatch => {
  console.log(`fetchSynonymsBegin invoked`);
  dispatch({ type: FETCH_SYNONYMS_BEGIN });
  return await merriamWebster
    .get(`/${headword}?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`)
    .then(response => {
      return dispatch({
        type: FETCH_SYNONYMS_SUCCESS,
        payload: response.data,
        headword
      });
    })
    .catch(error => dispatch({ type: FETCH_SYNONYMS_FAIL, payload: error }));
};
