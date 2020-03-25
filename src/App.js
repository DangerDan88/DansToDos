import React, { Component } from "react";
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
        <div className="flex justify-center bg-gray-500 text-xl">
          <h1>To Do list</h1>
        </div>
        <form className="bg-gray-100 flex shadow-md" onSubmit={this.onSubmit}>
          <input
            className="form-input mt-1 block w-full bg-transparent"
            value={this.state.toDo}
            onChange={this.onChange}
          />
          <button className="bg-blue-500 hover:bg-red-500">Add ToDo:</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
