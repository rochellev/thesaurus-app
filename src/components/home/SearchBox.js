import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceInput = term => {
    // debugger;
    // setTimeout(term => setSearchTerm(term), 100);
    setSearchTerm(term);
  };
  return (
    <div>
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
