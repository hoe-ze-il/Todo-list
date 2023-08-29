import React from "react";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import TaskTodo from "./TaskTodo";
import MyTaskCSS from "./MyTask.module.css";

export default function PackingTaskTodo() {
  const { tasks } = useContext(DataContext);
  return (
    <ul className={MyTaskCSS["packing-task-todo"]}>
      {tasks.map((item) => (
        <TaskTodo key={item.id} item={item} />
      ))}
    </ul>
  );
}
