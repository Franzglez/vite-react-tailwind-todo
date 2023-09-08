import React, { useState } from "react";

const TodoCreate = (createTodo) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitle("");
    } else {
      createTodo(title);
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="dark:bg-gray-800 transition-all duration-1000 flex items-center gap-4 rounded-md bg-white overflow-hidden py-4 px-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"> </span>
      <input
        type="text"
        placeholder="Create a new todo.."
        className="w-full outline-none text-gray-400 dark:bg-gray-800 transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
