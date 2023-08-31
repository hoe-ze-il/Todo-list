import GroupForm from "./GroupForm";
import SidebarCSS from "./Sidebar.module.css";
import IconX from "../../Assets/Icons/IconX";
import IconSun from "../../Assets/Icons/IconSun";
import IconList from "../../Assets/Icons/IconList";
import IconEmptyStar from "../../Assets/Icons/IconEmptyStar";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function Sidebar() {
  const { isSidebar, taskLength, numCompleted, setSortBy } =
    useContext(DataContext);
  return (
    <aside
      className={`${SidebarCSS.sidebar} ${
        isSidebar ? SidebarCSS["open-sidebar"] : ""
      }`}
    >
      <IconX />
      <section className={SidebarCSS.list}>
        <ul className={SidebarCSS.ul}>
          <li>
            <div>
              <IconSun />
              <p>MyTask</p>
            </div>
            {taskLength ? <span>{taskLength}</span> : null}
          </li>

          <li>
            <div>
              <IconEmptyStar />
              <p>Important</p>
            </div>
            <span>0</span>
          </li>

          <li
            onClick={() => setSortBy("completed")}
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
        <GroupForm />
      </section>
    </aside>
  );
}
