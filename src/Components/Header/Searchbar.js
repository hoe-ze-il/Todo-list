import HeaderCSS from "./Header.module.css";
import IconSearch from "../../Assets/Icons/IconSearch";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

export default function Searchbar() {
  const { setQuery } = useContext(DataContext);
  return (
    <div className={HeaderCSS["search-container"]}>
      <IconSearch />
      <input
        className={HeaderCSS.search}
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
