import MyTaskCSS from "./MyTask.module.css";
import IconUnComplete from "../../Assets/Icons/IconUnComplete";
import IconCompleted from "../../Assets/Icons/IconCompleted";
import IconEmptyStarColor from "../../Assets/Icons/IconEmpyStarColor";
import IconEdit from "../../Assets/Icons/IconEdit";
import DataContext from "../../Context/DataContext";
import { useContext, useState } from "react";
import IconFullStar from "../../Assets/Icons/IconFullStar";

export default function TaskTodo({ item }) {
  const {
    handleShowDeleteConfirmation,
    handleEditTaskName,
    handleToggleCompleteTasks,
    handleToggleImportantTasks,
  } = useContext(DataContext);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (editedTaskName.trim() !== "") {
      handleEditTaskName(editId, editedTaskName);
      setIsEditMode(false);
    }
  };

  const handleEditClick = (name, id) => {
    if (!isEditMode) {
      setEditedTaskName(name);
      setEditId(id);
      setIsEditMode(true);
      setEditedTaskName("");
    }
    if (isEditMode) setIsEditMode(false);
  };

  return (
    <>
      <li key={item.id} className={MyTaskCSS["task-todo"]}>
        {isEditMode ? (
          <form
            className={MyTaskCSS["form-edit-task-name"]}
            onSubmit={(e) => handleSave(e)}
          >
            <input
              className={MyTaskCSS["edit-input"]}
              type="text"
              value={editedTaskName}
              placeholder="Edit Your Task..."
              onChange={(e) => setEditedTaskName(e.target.value)}
              required
            />
          </form>
        ) : (
          <>
            <div className={MyTaskCSS["left-flex"]}>
              {!item.completed ? (
                <>
                  <div
                    onClick={() => handleToggleCompleteTasks(item.id)}
                    title="Set task to complete"
                  >
                    <IconUnComplete />
                  </div>
                  <p>{item.taskName}</p>
                </>
              ) : (
                <>
                  <div
                    onClick={() => handleToggleCompleteTasks(item.id)}
                    title="Set task to uncomplete"
                  >
                    <IconCompleted />
                  </div>
                  <p className={MyTaskCSS.completed}>{item.taskName}</p>
                </>
              )}
            </div>
          </>
        )}
        {isEditMode ? (
          <div className={MyTaskCSS["btn-cancle-save"]}>
            <button className={MyTaskCSS.cancle} onClick={handleEditClick}>
              Cancle
            </button>
            <button className={MyTaskCSS.save} onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div className={MyTaskCSS["right-flex"]}>
            <div
              onClick={() => {
                handleEditClick(item.taskName, item.id);
              }}
            >
              <IconEdit />
            </div>
            {!item.important ? (
              <div onClick={() => handleToggleImportantTasks(item.id)}>
                <IconEmptyStarColor />
              </div>
            ) : (
              <div onClick={() => handleToggleImportantTasks(item.id)}>
                <IconFullStar />
              </div>
            )}
          </div>
        )}
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
