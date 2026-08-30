import { useEffect, useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TaskSummary from "./components/TaskSummary";
import "./styles.css";

const STORAGE_KEY = "react-basics-todos";

const starterTasks = [
  {
    id: 1,
    title: "Review JSX basics",
    completed: true,
  },
  {
    id: 2,
    title: "Practice useState and useEffect",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);

      return savedTasks ? JSON.parse(savedTasks) : starterTasks;
    } catch {
      return starterTasks;
    }
  });

  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const visibleTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setMessage("Task added successfully.");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );

    setMessage("Task deleted.");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));

    setMessage("Completed tasks cleared.");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <main className="app-shell">
      <section className="app-container">
        <header className="hero">
          <div>
            <p className="eyebrow">React Basics</p>
            <h1>Learn React by building.</h1>
            <p className="subtitle">
              A beginner-friendly To-Do app covering JSX, components, props,
              hooks, conditional rendering, and list rendering.
            </p>
          </div>
        </header>

        <TodoForm onAddTask={addTask} />

        {message && (
          <div className="success-message" role="status">
            {message}
          </div>
        )}

        <TaskSummary tasks={tasks} />

        <section className="task-controls">
          <div className="filter-group">
            {["all", "active", "completed"].map((option) => (
              <button
                key={option}
                type="button"
                className={filter === option ? "filter active" : "filter"}
                onClick={() => setFilter(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="clear-button"
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </section>

        <section className="task-list">
          {visibleTasks.length === 0 ? (
            <div className="empty-state">
              <h2>No tasks found</h2>
              <p>Try adding a task or selecting a different filter.</p>
            </div>
          ) : (
            visibleTasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </section>

        <footer className="app-footer">
          <p>
            Built with React + Vite as a React fundamentals practice project.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
