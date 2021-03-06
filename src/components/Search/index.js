import React from "react";
import "./style.css";

function Search({ handleFromSubmit, handleInputChange, search }) {
  return (
    <form className="form-group">
      <label className="searchName" htmlFor="name">
        Search by employee name
      </label>
      <input
        value={search}
        onChange={handleInputChange}
        id="name"
        type="text"
        placeholder="John Doe"
      ></input>
      <button type="submit" className="submitBtn">
        Search
      </button>
    </form>
  );
}

export default Search;
