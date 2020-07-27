import React, { Component } from "react";
import API from "../utils/Api";

class Homepage extends Component {
  state = {
    search: "",
    employees: [],
    toDisplay: [],
    sort: "none",
  };
}

export default Homepage;
