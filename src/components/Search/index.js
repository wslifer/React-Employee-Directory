import React from "react";

function Search({ handleFromSubmit, handleInputChange, search }) {
  return (
    <form className="search">
      <label htmlFor="name>">Search by employee name</label>
      <input
        value={search}
        onChange={handleInputChange}
        id="name"
        type="text"
        placeholder="John Doe"
      ></input>
      <button type="submit" onClick={handleFormSubmit} className="submitBtn">
        Search
      </button>
    </form>
  );
}

export default Search;
