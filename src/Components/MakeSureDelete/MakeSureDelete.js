import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";
import MakeSureDeleteCSS from "./MakeSureDelete.module.css";

export default function MakeSureDelete() {
  const { isMakeSureDelete, handleDeleteTask, handleHideDeleteConfirmation } =
    useContext(DataContext);

  return (
    <div
      className={`${MakeSureDeleteCSS.container} ${
        !isMakeSureDelete ? MakeSureDeleteCSS.hidden : ""
      }`}
    >
      <h1>Are you sure you want to delete?</h1>
      <div className={MakeSureDeleteCSS["btn-container"]}>
        <button className={MakeSureDeleteCSS.yes} onClick={handleDeleteTask}>
          Yes
        </button>
        <button
          className={MakeSureDeleteCSS.no}
          onClick={handleHideDeleteConfirmation}
        >
          No
        </button>
      </div>
    </div>
  );
}
