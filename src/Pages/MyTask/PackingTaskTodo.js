import React from "react";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import TaskTodo from "./TaskTodo";
import MyTaskCSS from "./MyTask.module.css";

export default function PackingTaskTodo() {
  const { tasks, query, sortBy } = useContext(DataContext);
  let sortedTasks;

  if (sortBy === "completed") {
    sortedTasks = tasks
      .slice()
      .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
  } else {
    // Handle other sorting criteria here, if needed.
    // If no sorting criteria is specified, you can assign tasks directly.
    sortedTasks = tasks.slice();
  }

  return (
    <ul className={MyTaskCSS["packing-task-todo"]}>
      {sortedTasks
        .filter((item) =>
          item.taskName.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => (
          <TaskTodo key={item.id} item={item} />
        ))}
    </ul>
  );
}
