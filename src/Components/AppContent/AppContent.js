import AppContentCSS from "./AppContent.module.css";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import DataContext from "../../Context/DataContext";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MyTask from "../../Pages/MyTask/MyTask";
import Important from "../../Pages/Important/Important";
import Complete from "../../Pages/Complete/Complete";
import MakeSureDelete from "../MakeSureDelete/MakeSureDelete";

export default function AppContent() {
  const { isMakeSureDelete } = useContext(DataContext);

  return (
    <div className={AppContentCSS.app}>
      <Header />
      <div className={AppContentCSS.container}>
        <Sidebar />
        <MakeSureDelete />
        <Routes>
          <Route path="/" element={<MyTask />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Complete />} />
        </Routes>
      </div>
      {isMakeSureDelete && <div className={AppContentCSS.overlay}></div>}
    </div>
  );
}
