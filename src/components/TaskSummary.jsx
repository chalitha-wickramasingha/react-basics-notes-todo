function TaskSummary({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <section className="summary-grid">
      <div className="summary-card">
        <span>Total</span>
        <strong>{tasks.length}</strong>
      </div>

      <div className="summary-card">
        <span>Active</span>
        <strong>{activeCount}</strong>
      </div>

      <div className="summary-card">
        <span>Completed</span>
        <strong>{completedCount}</strong>
      </div>
    </section>
  );
}

export default TaskSummary;
