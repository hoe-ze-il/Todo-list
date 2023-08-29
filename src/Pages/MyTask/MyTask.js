import TaskTodo from "./TaskTodo";
import MyTaskCSS from "./MyTask.module.css";
import IconMenu from "../../Assets/Icons/IconMenu";
import IconSun from "../../Assets/Icons/IconSun";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function MyTask() {
  const { isSidebar, handleSidebar, isLargeScreen } = useContext(DataContext);
  return (
    <main
      className={MyTaskCSS.container}
      onClick={isSidebar ? handleSidebar : null}
    >
      <div className={MyTaskCSS["section-name"]}>
        {isLargeScreen ? <IconSun /> : <IconMenu />}
        <div>
          <h1>MyTask</h1>
          <p className={MyTaskCSS["current-date"]}>Today date</p>
        </div>
      </div>
      <TaskTodo />
    </main>
  );
}
