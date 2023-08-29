import React from "react";
import HeaderCSS from "./Header.module.css";
import IconSearch from "../../Assets/Icons/IconSearch";

export default function Search() {
  return (
    <div className={HeaderCSS["search-container"]}>
      <IconSearch />
      <input className={HeaderCSS.search} type="text" placeholder="Search..." />
    </div>
  );
}
