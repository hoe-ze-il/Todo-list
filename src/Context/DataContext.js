import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const [tasks, setTasks] = useState([]);

  const [isMakeSureDelete, setIsMakeSureDelete] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const [query, setQuery] = useState("");

  const [sortBy, setSortBy] = useState("");

  const numCompleted = tasks.filter((item) => item.completed === true).length;
  console.log(numCompleted);

  const taskLength = tasks.length;
  console.log(tasks);

  const handleToggleCompleteTasks = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditTaskName = (id, newTaskName) => {
    const updatedTodos = tasks.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            taskName: newTaskName,
          }
        : todo
    );
    setTasks(updatedTodos);
  };

  const handleShowDeleteConfirmation = (id) => {
    setIsMakeSureDelete(true);
    setTaskIdToDelete(id);
  };

  const handleHideDeleteConfirmation = () => {
    setIsMakeSureDelete(false);
    setTaskIdToDelete(null);
  };

  const handleDeleteTask = () => {
    if (taskIdToDelete !== null) {
      setTasks((prevTasks) =>
        prevTasks.filter((item) => item.id !== taskIdToDelete)
      );
      setIsMakeSureDelete(false);
      setTaskIdToDelete(null);
    }
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // handle resize the screen to 1024
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // true = opensidebar; false = closesidebar
  const handleSidebar = () => {
    if (!isSidebar) setIsSidebar(true);
    if (isSidebar) setIsSidebar(false);
  };

  return (
    <DataContext.Provider
      value={{
        taskLength,
        //Handle Sidebar
        isSidebar,
        setIsSidebar,
        handleSidebar,

        // Handle change icon for large screen
        isLargeScreen,

        //handleTasks
        tasks,
        handleAddTask,

        // DeleteTask
        isMakeSureDelete,
        handleShowDeleteConfirmation,
        handleHideDeleteConfirmation,
        handleDeleteTask,

        // EditTask
        handleEditTaskName,

        // Search
        query,
        setQuery,

        // CompleteTask
        handleToggleCompleteTasks,

        //number of completed task
        numCompleted,

        // sortby
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
