import * as React from "react";

export default function App() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [{ id: crypto.randomUUID(), name: input }, ...prevTodos];
    });
    setInput("");
  };

  return (
    <main>
      <div>
        {todos != null &&
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                <input type="checkbox" />
                {todo.name}
                <button>Delete</button>
              </div>
            );
          })}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Todo List</label>
        <br />
        <input
          type="text"
          placeholder="Enter todo here"
          value={input}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </main>
  );
}
