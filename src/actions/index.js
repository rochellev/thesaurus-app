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
  dispatch({ type: FETCH_SYNONYMS_BEGIN });
  return await merriamWebster
    .get(`/cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`)
    .then(response => {
      // change shape
      let shapedData = [{ name: headword, children: [] }];
      let res = response.data[0];
      console.log(
        `response.data[0]:\n${JSON.stringify(
          response.data[0].meta.syns[0],
          null,
          2
        )}`
      );
      return dispatch({ type: FETCH_SYNONYMS_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: FETCH_SYNONYMS_FAIL, payload: error }));
};

// export const fetchSynonymsBegin = headword => async dispatch => {
//   dispatch({ type: FETCH_SYNONYMS_BEGIN });
//   return await merriamWebster
//     .get(`/cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`)
//     .then(response =>
//       dispatch({ type: FETCH_SYNONYMS_SUCCESS, payload: response.data })
//     )
//     .catch(error => dispatch({ type: FETCH_SYNONYMS_FAIL, payload: error }));
// };
