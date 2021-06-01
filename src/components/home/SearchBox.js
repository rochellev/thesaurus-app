import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export const SearchBox = () => {
  return (
    <div>
      <label>Search!</label>
      <input
        type="text"
        id="headword"
        name="headword"
        autoFocus
        placeholder="Synonyms for..."
      />
    </div>
  );
};
