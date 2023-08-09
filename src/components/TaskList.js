import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(taskId) {
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTask);
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
