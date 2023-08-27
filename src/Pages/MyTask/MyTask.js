import React from "react";
import TaskTodo from "./TaskTodo";
import MyTaskCSS from "./MyTask.module.css";

export default function MyTask() {
  return (
    <div className={MyTaskCSS.container}>
      <TaskTodo />
    </div>
  );
}
