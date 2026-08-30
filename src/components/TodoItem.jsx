function TodoItem({ task, onToggle, onDelete }) {
  return (
    <article className={task.completed ? "task-item completed" : "task-item"}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span>
          <strong>{task.title}</strong>
          <small>{task.completed ? "Completed" : "In progress"}</small>
        </span>
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default TodoItem;
