import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeletetask}) {
  const tasklist = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeletetask={onDeletetask}
    />
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasklist}
    </div>
  );
}

export default TaskList;
