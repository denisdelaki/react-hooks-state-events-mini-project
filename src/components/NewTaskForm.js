import React, { useState} from "react";

function NewTaskForm({ ontaskFormSubmit, CATEGORIES }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("code")
  function handleSubmit(event) {
    event.preventDefault();
    ontaskFormSubmit({ text, category })
    setText("")
    setCategory("code");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"value={text} onChange={(event)=>setText(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {CATEGORIES.map((cat) => (<option key={cat}>{ cat}</option>))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
