import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="flex justify-center">
        <ToDoForm saveToDo={console.warn} />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
