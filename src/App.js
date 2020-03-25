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

  deleteItem(id) {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="flex justify-center mt-4 bg-green-700 text-3xl">
          <h1 className="mt-2 p-2">To Do list</h1>
        </div>
        <form className="flex p-4" onSubmit={this.onSubmit}>
          <label className="block">
            {" "}
            Add Items:
            <input
              className="form-input mt-1 block bg-transparent"
              value={this.state.toDo}
              onChange={this.onChange}
            />
          </label>

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded">
            Submit
          </button>
        </form>
        <div className="container w-full bg-blue-500">
          <h2 className="flex text-2xl justify-center">Items:</h2>{" "}
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
