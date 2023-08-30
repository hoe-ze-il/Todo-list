import MyTaskCSS from "./MyTask.module.css";
import IconUnComplete from "../../Assets/Icons/IconUnComplete";
import IconEmptyStarColor from "../../Assets/Icons/IconEmpyStarColor";
import IconEdit from "../../Assets/Icons/IconEdit";
import DataContext from "../../Context/DataContext";
import { useContext } from "react";
export default function TaskTodo({ item }) {
  const { handleShowDeleteConfirmation } = useContext(DataContext);
  return (
    <>
      <li className={MyTaskCSS["task-todo"]}>
        <div className={MyTaskCSS["left-flex"]}>
          <div>
            <IconUnComplete />
          </div>
          <p>{item.taskName}</p>
        </div>
        <div className={MyTaskCSS["right-flex"]}>
          <IconEdit />
          <IconEmptyStarColor />
        </div>
      </li>
      <button
        className={MyTaskCSS.delete}
        onClick={() => handleShowDeleteConfirmation(item.id)}
      >
        Delete Task
      </button>
    </>
  );
}
