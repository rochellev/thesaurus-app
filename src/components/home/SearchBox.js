import React, { useState, useEffect } from "react";
// import { connect, useSelector, useDispatch } from "react-redux";
import { debounce } from "throttle-debounce";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceInput = term => {
    setTimeout(() => debounceSetSearchTerm(term), 550);
  };
  const debounceSetSearchTerm = debounce(550, false, term =>
    setSearchTerm(term)
  );
  return (
    <div style={{ marginTop: 20 }}>
      <div>The searchTerm is {searchTerm}</div>
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
