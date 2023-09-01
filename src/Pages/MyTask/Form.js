import { useState } from "react";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import MyTaskCSS from "./MyTask.module.css";
import IconPlus from "../../Assets/Icons/IconPlus";

function Form() {
  const { handleAddTask } = useContext(DataContext);
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) return;
    const newTask = {
      id: Date.now(),
      taskName,
      important: false,
      completed: false,
    };

    handleAddTask(newTask);
    setTaskName("");
  };
  return (
    <form className={MyTaskCSS.form} onSubmit={handleSubmit}>
      <div className={MyTaskCSS["left-input"]}>
        <IconPlus />
        <input
          className={MyTaskCSS["task-input"]}
          type="text"
          placeholder="Add a Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <button className={MyTaskCSS["btn-add"]}>Add</button>
    </form>
  );
}

export default Form;
