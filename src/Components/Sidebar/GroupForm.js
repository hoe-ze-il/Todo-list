import SidebarCSS from "./Sidebar.module.css";
import IconAddGroup from "../../Assets/Icons/IconAddGroup";

function GroupForm() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form className={SidebarCSS.group} onSubmit={handleSubmitForm}>
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
