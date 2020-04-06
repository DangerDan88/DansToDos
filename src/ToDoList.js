import React from "react";

const ToDoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index.toString()} value={todo}></li>
      ))}
      <button
        onClick={() => {
          deleteTodo(index);
        }}
      ></button>
    </ul>
  );
};

export default ToDoList;
