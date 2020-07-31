import React from "react";

function TableColumns({ handleButtonClick }) {
  return (
    <ul className="columns">
      <li className="columnName">Name</li>
      <li className="columnName">Age</li>
      <li className="columnName">Email</li>
      <li className="columnName">Phone</li>
    </ul>
  );
}

export default TableColumns;
