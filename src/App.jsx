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

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <main>
      <div>
        {todos != null &&
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                <input type="checkbox" />
                <span>{todo.name}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
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
