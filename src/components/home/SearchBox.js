import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export const SearchBox = () => {
  return (
    <div className="ui large icon input" style={{paddingTop: 25}}>
      <input type="text" placeholder="Search large..." />
      <i className="search link icon"></i>
    </div>
  );
};
