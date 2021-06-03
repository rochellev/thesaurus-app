import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "throttle-debounce";
import { setHeadword } from "../../actions";

export const SearchBox = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const currentHeadword = useSelector(state => state.synonyms.headword)
  const dispatch = useDispatch();
  // const set = word => setHeadword(word);

  const debounceInput = term => {
    setTimeout(() => debounceSetSearchTerm(term), 550);
  };
  const debounceSetSearchTerm = debounce(550, false, term =>
    dispatch(setHeadword(term))
  );

  return (
    <div style={{ marginTop: 20 }}>
      <div>The searchTerm is {currentHeadword}</div>
      <div className="ui large icon input" style={{ marginTop: 15 }}>
        <input
          type="text"
          placeholder="Search large..."
          onChange={e => debounceInput(e.target.value)}
        />
        <i className="search link icon"></i>
      </div>
    </div>
  );
};
