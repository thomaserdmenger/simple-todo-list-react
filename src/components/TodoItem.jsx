export default function TodoItem({
  id,
  checked,
  name,
  deleteTodo,
  handleChecked,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChecked(id, e.target.checked)}
      />
      <span style={checked ? { textDecoration: "line-through" } : null}>
        {name}
      </span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}
