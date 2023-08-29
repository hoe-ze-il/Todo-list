import React, { useEffect } from "react";
import AppCSS from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyTask from "./Pages/MyTask/MyTask";
import Important from "./Pages/Important/Important";
import Complete from "./Pages/Complete/Complete";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSidebar = () => {
    if (!isSidebar) setIsSidebar(true);
    if (isSidebar) setIsSidebar(false);
  };
  return (
    <div>
      <Header />
      <div className={AppCSS.container}>
        <Sidebar openSidebar={isSidebar} onCloseSidebar={handleSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <MyTask
                onToggleSidebar={handleSidebar}
                isSidebar={isSidebar}
                isLargeScreen={isLargeScreen}
              />
            }
          />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Complete />} />
        </Routes>
      </div>
    </div>
  );
}
