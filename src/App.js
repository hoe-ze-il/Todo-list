import React from "react";
import AppCSS from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyTask from "./Pages/MyTask/MyTask";
import Important from "./Pages/Important/Important";
import Complete from "./Pages/Complete/Complete";
import { Routes, Route } from "react-router-dom";
import DataContext, { DataProvider } from "./Context/DataContext";
import { useContext } from "react";
import MakeSureDelete from "./Components/MakeSureDelete/MakeSureDelete";
export default function App() {
  return (
    <DataProvider>
      {" "}
      {/* Wrap your entire app with DataProvider */}
      <AppContent />
    </DataProvider>
  );
}

function AppContent() {
  const { isMakeSureDelete } = useContext(DataContext);

  return (
    <div className={AppCSS.app}>
      <Header />
      <div className={AppCSS.container}>
        <Sidebar />
        <MakeSureDelete />
        <Routes>
          <Route path="/" element={<MyTask />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Complete />} />
        </Routes>
      </div>
      {isMakeSureDelete && <div className={AppCSS.overlay}></div>}
    </div>
  );
}
