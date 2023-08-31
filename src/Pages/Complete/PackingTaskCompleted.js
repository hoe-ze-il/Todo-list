import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import TaskComplete from "./TaskCompleted";

function PackingTaskComplete() {
  const { tasks } = useContext(DataContext);
  console.log(tasks);
  return (
    <ul>
      {tasks.map((item) => (
        <TaskComplete key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default PackingTaskComplete;
