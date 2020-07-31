import React from "react";
import Search from "../Search/index";
import TableContents from "../TableContents/index";
import TableColumns from "../TableColumns/index";

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
      <div className="table">
        <TableColumns handleButtonClick={handleButtonClick} />
        <TableContents toDisplay={toDisplay} />
      </div>
    </main>
  );
}

export default Table;
