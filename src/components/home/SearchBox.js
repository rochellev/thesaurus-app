import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "throttle-debounce";
import { setHeadword } from "../../actions";

export const SearchBox = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const currentHeadword = useSelector(state => state.synonyms.headword);
  const dispatch = useDispatch();
  // const set = word => setHeadword(word);

  const debounceInput = term => {
    setTimeout(() => debounceSetSearchTerm(term), 550);
  };
  const debounceSetSearchTerm = debounce(550, false, term =>
    dispatch(setHeadword(term))
  );

  return (
    <div style={{width: '50%'}}>
      <div className="ui fluid icon input" style={{fontSize: '1.07em'}}>
        <input
          type="text"
          placeholder="What's another word for..."
          onChange={e => debounceInput(e.target.value)}
        />
        <i className="search link icon"></i>
      </div>
      <div>The searchTerm is {currentHeadword}</div>
    </div>
  );
};
