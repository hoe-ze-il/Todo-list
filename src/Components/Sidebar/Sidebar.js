import React from "react";
import GroupForm from "./GroupForm";
import SidebarCSS from "./Sidebar..module.css";
import IconX from "../../Assets/Icons/IconX";
import IconSun from "../../Assets/Icons/IconSun";
import IconList from "../../Assets/Icons/IconList";
import IconEmptyStar from "../../Assets/Icons/IconEmptyStar";

export default function Sidebar({ openSidebar, onCloseSidebar }) {
  return (
    <aside
      className={`${SidebarCSS.sidebar} ${
        openSidebar ? SidebarCSS["open-sidebar"] : ""
      }`}
    >
      <IconX onCloseSidebar={onCloseSidebar} />
      <section className={SidebarCSS.list}>
        <ul className={SidebarCSS.ul}>
          <li>
            <div>
              <IconSun />
              <p>MyTask</p>
            </div>
            <span>2</span>
          </li>
          <li>
            <div>
              <IconEmptyStar />
              <p>Important</p>
            </div>
            <span>1</span>
          </li>
          <li>
            <div>
              <IconList />
              <p>Completed</p>
            </div>
            <span>1</span>
          </li>
        </ul>
        <div className={SidebarCSS.line}></div>
        <GroupForm />
      </section>
    </aside>
  );
}
