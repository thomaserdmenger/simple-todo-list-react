import * as React from "react";

export default function App() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([
    { id: crypto.randomUUID(), name: "Homework" },
    { id: crypto.randomUUID(), name: "Kitchenwork" },
  ]);

  const handleChange = ({ target }) => {
    setInput((prevInput) => target.value);
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
      <form>
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
