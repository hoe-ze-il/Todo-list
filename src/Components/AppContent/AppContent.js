import AppContentCSS from "./AppContent.module.css";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import DataContext from "../../Context/DataContext";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MyTask from "../../Pages/MyTask/MyTask";
import MakeSureDelete from "../MakeSureDelete/MakeSureDelete";

export default function AppContent() {
  const { isMakeSureDelete } = useContext(DataContext);

  return (
    <div className={AppContentCSS.app}>
      <Header />
      <div className={AppContentCSS.container}>
        <Sidebar />
        <MakeSureDelete />
        <MyTask />
      </div>
      {isMakeSureDelete && <div className={AppContentCSS.overlay}></div>}
    </div>
  );
}
