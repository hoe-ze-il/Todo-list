import { useContext } from "react";
import IconsCSS from "./Icons.module.css";
import DataContext from "../../Context/DataContext";

function IconMenu() {
  const { handleSidebar } = useContext(DataContext);
  return (
    <svg
      className={IconsCSS.menu}
      onClick={handleSidebar}
      fill="#000"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.4 9h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 13h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM3.6 7h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1z"></path>
    </svg>
  );
}

export default IconMenu;
