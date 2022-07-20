import React from "react";

function Task({ text, category, onDeletetask }) {
  function handleDeletes() {
    onDeletetask(text)
  }
  return (
    <div className="task">
      <div className="label">{ category}</div>
      <div className="text">{ text}</div>
      <button className="delete" onClick={handleDeletes}>X</button>
    </div>
  );
}

export default Task;
