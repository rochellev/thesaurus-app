import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <div className="ui large icon input" style={{ marginTop: 15 }}>
      <input type="text" placeholder="Search large..." />
      <i className="search link icon"></i>
    </div>
  );
};
