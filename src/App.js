import React, { Component } from "react";
import InputForm from "./InputForm";
import List from "./List";
class App extends Component {
  // class component so am using normal this.state instead of hooks.
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      pendingItem: ""
    };
  }

  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };
  handleRemove = index => {
    const newState = this.state.list.filter(item => {
      this.state.list.indexOf(item) !== index
    });

    this.setState({ 
      list: newState
    });
  };


  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {" "}
          <h1 className="flex justify-center text-2xl">React Todo List</h1>
          <div className="flex justify-center">
            <InputForm
              className="input"
              type="text"
              handleItemInput={this.handleItemInput}
              newItemSubmitHandler={this.newItemSubmitHandler}
              value={this.state.pendingItem}
              placeholder="add an item"
            />
            <List list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
