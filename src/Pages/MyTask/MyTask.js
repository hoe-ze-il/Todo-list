import TaskTodo from "./TaskTodo";
import MyTaskCSS from "./MyTask.module.css";
import IconMenu from "../../Assets/Icons/IconMenu";
import IconSun from "../../Assets/Icons/IconSun";

export default function MyTask({ onToggleSidebar, isSidebar, isLargeScreen }) {
  return (
    <main
      className={MyTaskCSS.container}
      onClick={isSidebar ? onToggleSidebar : null}
    >
      <div className={MyTaskCSS["section-name"]}>
        {isLargeScreen ? (
          <IconSun />
        ) : (
          <IconMenu onOpenSidebar={onToggleSidebar} />
        )}
        <div>
          <h1>MyTask</h1>
          <p className={MyTaskCSS["current-date"]}>Today date</p>
        </div>
      </div>
      <TaskTodo />
    </main>
  );
}
