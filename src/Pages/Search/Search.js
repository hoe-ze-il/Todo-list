import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { useLocation } from "react-router-dom";
import PackingTaskTodo from "../MyTask/PackingTaskTodo";

function Search() {
  const { tasks } = useContext(DataContext);
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  // Filter tasks based on the search query
  const filteredTasks = query
    ? tasks.filter((item) =>
        item.taskName.toLowerCase().includes(query.toLowerCase())
      )
    : tasks;

  return (
    <main>
      <h2>Search Results for: "{query}"</h2>
      {filteredTasks.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          <PackingTaskTodo taskSearch={filteredTasks} />
        </ul>
      )}
    </main>
  );
}

export default Search;
