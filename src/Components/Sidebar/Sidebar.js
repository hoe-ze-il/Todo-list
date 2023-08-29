import GroupForm from "./GroupForm";
import SidebarCSS from "./Sidebar..module.css";
import IconX from "../../Assets/Icons/IconX";
import IconSun from "../../Assets/Icons/IconSun";
import IconList from "../../Assets/Icons/IconList";
import IconEmptyStar from "../../Assets/Icons/IconEmptyStar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function Sidebar() {
  const { isSidebar } = useContext(DataContext);
  return (
    <aside
      className={`${SidebarCSS.sidebar} ${
        isSidebar ? SidebarCSS["open-sidebar"] : ""
      }`}
    >
      <IconX />
      <section className={SidebarCSS.list}>
        <ul className={SidebarCSS.ul}>
          <NavLink to="/" className={SidebarCSS["sidebar-links"]}>
            <li>
              <div>
                <IconSun />
                <p>MyTask</p>
              </div>
              <span>2</span>
            </li>
          </NavLink>
          <NavLink to="/important" className={SidebarCSS["sidebar-links"]}>
            <li>
              <div>
                <IconEmptyStar />
                <p>Important</p>
              </div>
              <span>1</span>
            </li>
          </NavLink>
          <NavLink to="/completed" className={SidebarCSS["sidebar-links"]}>
            <li>
              <div>
                <IconList />
                <p>Completed</p>
              </div>
              <span>1</span>
            </li>
          </NavLink>
        </ul>
        <div className={SidebarCSS.line}></div>
        <GroupForm />
      </section>
    </aside>
  );
}
