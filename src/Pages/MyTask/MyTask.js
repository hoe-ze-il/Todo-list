import MyTaskCSS from "./MyTask.module.css";
import HeaderPage from "./HeaderPage";
import Form from "./Form";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import PackingTaskTodo from "./PackingTaskTodo";

export default function MyTask() {
  const { isSidebar, handleSidebar } = useContext(DataContext);
  return (
    <main
      className={MyTaskCSS.container}
      onClick={isSidebar ? handleSidebar : null}
    >
      <HeaderPage />
      <Form />
      <PackingTaskTodo />
    </main>
  );
}
