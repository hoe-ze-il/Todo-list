import React from "react";
import MyTaskCSS from "./MyTask.module.css";
import IconUnComplete from "../../Assets/Icons/IconUnComplete";
import IconEmptyStarColor from "../../Assets/Icons/IconEmpyStarColor";

export default function TaskTodo({ item }) {
  return (
    <li className={MyTaskCSS["task-todo"]}>
      <div>
        <IconUnComplete />
        {item.taskName}
      </div>
      <IconEmptyStarColor />
    </li>
  );
}
