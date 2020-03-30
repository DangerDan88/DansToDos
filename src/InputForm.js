import React from "react";

const InputForm = props => {
  return (
    <form className="todoInput">
      <input
        className="input"
        type="text"
        onSubmit={props.newItemSubmitHandler}
        // this is an event handler for our input
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="add an item"
      />
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

export default InputForm;
