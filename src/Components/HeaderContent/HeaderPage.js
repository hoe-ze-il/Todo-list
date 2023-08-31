import IconSun from "../../Assets/Icons/IconSun";
import IconMenu from "../../Assets/Icons/IconMenu";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import HeaderPageCSS from "./HeaderPage.module.css";

function HeaderPage() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString(undefined, options);
  const { isLargeScreen } = useContext(DataContext);
  return (
    <div className={HeaderPageCSS["section-name"]}>
      {isLargeScreen ? <IconSun /> : <IconMenu />}
      <div>
        <h1>MyTask</h1>
        <p className={HeaderPageCSS["current-date"]}>{today}</p>
      </div>
    </div>
  );
}

export default HeaderPage;
