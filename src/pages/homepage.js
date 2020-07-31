import React, { Component } from "react";
import Header from "../components/Header/index";
import Table from "../components/Table/index";
import API from "../utils/Api";

class Homepage extends Component {
  state = {
    search: "",
    employees: [],
    toDisplay: [],
    sort: "none",
  };

  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    API.getUsers()
      .then(({ data }) => {
        this.setState({
          users: data.results,
          toDisplay: data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      toDisplay: this.state.users.filter(
        (user) =>
          user.name.first
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          user.name.last.toLowerCase().includes(this.state.search.toLowerCase())
      ),
    });
  };

  handleButtonClick = () => {
    if (this.state.sort === "none" || this.state.sort === "down") {
      this.setState({
        sort: "up",
        toDisplay: this.state.toDisplay.sort((a, b) => a.dob.age - b.dob.age),
      });
    } else {
      this.setState({
        sort: "down",
        toDisplay: this.state.toDisplay.sort((a, b) => b.dob.age - a.dob.age),
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Table
          toDisplay={this.state.toDisplay}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Homepage;
