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
  console.log(`fetchSynonymsBegin invoked`)
  dispatch({ type: FETCH_SYNONYMS_BEGIN });
  return await merriamWebster
    .get(`/cool?key=${process.env.REACT_APP_MERRIAM_WEBSTER_KEY}`)
    .then(response => {
      // change shape
      // console.log(`fetch begin. state:\n${JSON.stringify(response)}`);
      // let shapedData = [{ name: headword, children: [] }];
      // const shortDefs = response.data[0].shortDef;
      // const synonyms = response.data[0].meta.syns;
      // for (let [i, def] of shortDefs.entries()) {
      //   let node = { name: def, children: [] };
      //   for (let word of synonyms[i]) {
      //     if (node.children.length < 10) {
      //       node.children.push({ name: word, value: 1 });
      //     } else {
      //       break;
      //     }
      //   }
      //   shapedData[0].children.push(node);
      // }
      // console(`shapedData:\n${JSON.stringify(shapedData, null, 2)}`);
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
