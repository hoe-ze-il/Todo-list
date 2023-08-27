import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyTask from "./Pages/MyTask/MyTask";

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MyTask />
    </div>
  );
}
