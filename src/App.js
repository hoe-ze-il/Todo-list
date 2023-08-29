import AppCSS from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyTask from "./Pages/MyTask/MyTask";
import Important from "./Pages/Important/Important";
import Complete from "./Pages/Complete/Complete";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

export default function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <div className={AppCSS.container}>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <MyTask
                // onToggleSidebar={handleSidebar}
                // isSidebar={isSidebar}
                // isLargeScreen={isLargeScreen}
                />
              }
            />
            <Route path="/important" element={<Important />} />
            <Route path="/completed" element={<Complete />} />
          </Routes>
        </div>
      </DataProvider>
    </div>
  );
}
