import SidebarCSS from "./Sidebar.module.css";
import IconAddGroup from "../../Assets/Icons/IconAddGroup";

function GroupForm() {
  return (
    <form className={SidebarCSS.group}>
      <div className={SidebarCSS["add-group"]}>
        <IconAddGroup />
        <input
          className={SidebarCSS["group-input"]}
          type="text"
          placeholder="Add a group"
        />
      </div>
    </form>
  );
}

export default GroupForm;
