import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: taskText,
      category: selectedCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText("");
    setSelectedCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map(
            (category, index) =>
              category !== "All" && <option key={index}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;
