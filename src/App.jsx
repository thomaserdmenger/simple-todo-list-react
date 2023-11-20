import * as React from "react";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") return;

    setTodos((prevTodos) => {
      return [
        { id: crypto.randomUUID(), name: input, checked: false },
        ...prevTodos,
      ];
    });
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleChecked = (id, checked) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, checked };
        } else {
          return todos;
        }
      });
    });
  };

  return (
    <main>
      <div>
        {todos != null &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                handleChecked={handleChecked}
              />
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
