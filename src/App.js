import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {" "}
          <h1 className="flex justify-center text-2xl">React Todo List</h1>
          <form className="todoInput">
            <input
              className="input"
              type="text"
              value={this.state.pendingItem}
              placeholder="add an item"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
