import IconMenu from "../../Assets/Icons/IconMenu";
import IconSun from "../../Assets/Icons/IconSun";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import MyTaskCSS from "./MyTask.module.css";

function HeaderPage() {
  const { isLargeScreen } = useContext(DataContext);
  return (
    <div className={MyTaskCSS["section-name"]}>
      {isLargeScreen ? <IconSun /> : <IconMenu />}
      <div>
        <h1>MyTask</h1>
        <p className={MyTaskCSS["current-date"]}>Today date</p>
      </div>
    </div>
  );
}

export default HeaderPage;
