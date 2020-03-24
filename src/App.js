import React, { Component } from "react";
import "./App.css";
import List from "./List";
class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
      <div className="App">
        <form className="bg-grey-300" onSubmit={this.onSubmit}>
          <input value={this.state.toDo} onChange={this.onChange} />
          <button>Add ToDo:</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
