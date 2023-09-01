import SidebarCSS from "./Sidebar.module.css";
import IconX from "../../Assets/Icons/IconX";
import IconSun from "../../Assets/Icons/IconSun";
import IconList from "../../Assets/Icons/IconList";
import IconEmptyStar from "../../Assets/Icons/IconEmptyStar";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function Sidebar() {
  const {
    isSidebar,
    taskLength,
    numCompleted,
    numImportant,
    setSortBy,
    setIsSidebar,
  } = useContext(DataContext);
  return (
    <aside
      className={`${SidebarCSS.sidebar} ${
        isSidebar ? SidebarCSS["open-sidebar"] : ""
      }`}
    >
      <IconX />
      <section className={SidebarCSS.list}>
        <ul className={SidebarCSS.ul}>
          <li
            onClick={() => {
              setSortBy("myTask");
              setIsSidebar(false);
            }}
          >
            <div>
              <IconSun />
              <p>MyTask</p>
            </div>
            {taskLength ? <span>{taskLength}</span> : null}
          </li>

          <li
            onClick={() => {
              setSortBy("important");
              setIsSidebar(false);
            }}
            title="Sorted By Important"
          >
            <div>
              <IconEmptyStar />
              <p>Important</p>
            </div>
            {numImportant ? <span>{numImportant}</span> : null}
          </li>

          <li
            onClick={() => {
              setSortBy("completed");
              setIsSidebar(false);
            }}
            title="Sorted By Completed"
          >
            <div>
              <IconList />
              <p>Completed</p>
            </div>
            {numCompleted ? <span>{numCompleted}</span> : null}
          </li>
        </ul>
        <div className={SidebarCSS.line}></div>
      </section>
    </aside>
  );
}
