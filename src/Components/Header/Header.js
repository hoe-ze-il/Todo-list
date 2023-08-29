import React from "react";
import HeaderCSS from "./Header.module.css";
import Search from "./Search";

export default function Header() {
  return (
    <header className={HeaderCSS.header}>
      <nav className={HeaderCSS.nav}>
        <h1 className={HeaderCSS.h1}>ToDo</h1>
        <Search />
        <img className={HeaderCSS.image} src="img/user.png" alt="User" />
      </nav>
    </header>
  );
}
