import React, { Component } from "react";
import "./App.css";
import List from "./List";
export default class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({
      toDo: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      toDo: "",
      items: [...this.state.items, this.state.toDo]
    });
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.toDo} onChange={this.onChange} />
          <button>Add ToDo:</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
