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

// fetch API data, handle success/error
export const fetchSynonymsBegin = headword => async dispatch => {
  // signal starting api call
  dispatch({ type: FETCH_SYNONYMS_BEGIN });
  // changed to return this conditional sort of. rather than set a variable to response.
  return await merriamWebster
    .get(`/cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`)
    .then(response =>
      dispatch({ type: FETCH_SYNONYMS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_SYNONYMS_FAIL, payload: error }));
};

// export const fetchSynonymsSuccess = synonyms => {};

// export const fetchSynonymsFail = error => {
//   return { type: FETCH_SYNONYMS_FAIL, payload: { error } };
// };

// export const transformData = () => {

// }
