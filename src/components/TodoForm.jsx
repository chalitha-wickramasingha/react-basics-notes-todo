import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title">New task</label>

      <div className="input-row">
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Learn conditional rendering"
          maxLength={100}
        />

        <button type="submit">Add task</button>
      </div>
    </form>
  );
}

export default TodoForm;
