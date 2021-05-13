// action creator

// currently only setting up reducer for getting data
export const selectWord = word => {
  return {
    type: "WORD_SELECTED",
    payload: word
  };
};
