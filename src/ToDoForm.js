import React from "react";
import { useState } from "react";

const ToDoForm = ({ saveToDo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className="todoInput"
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <input className="input" type="text" placeholder="add an item" />
      <button
        className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
        type="submit"
        name="submit"
        value="submit"
      >
        Add item
      </button>
    </form>
  );
};

export default ToDoForm;
