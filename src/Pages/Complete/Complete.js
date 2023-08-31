import React from "react";
import CompleteCSS from "./Complete.module.css";
import PackingTaskComplete from "./PackingTaskCompleted";
import HeaderPage from "../../Components/HeaderContent/HeaderPage";

export default function Complete() {
  return (
    <main className={CompleteCSS.complete}>
      <HeaderPage />
      <PackingTaskComplete />
    </main>
  );
}
