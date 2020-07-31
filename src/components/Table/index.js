import React from "react";
import Search from "../Search/index";

function Table({
  toDisplay,
  handleFormSubmit,
  handleInputChange,
  handleButtonClick,
}) {
  return (
    <main className="wrapper">
      <Search
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <div className="table"></div>
    </main>
  );
}

export default Table;
