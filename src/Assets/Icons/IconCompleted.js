import React from "react";
import IconsCSS from "./Icons.module.css";
export default function IconCompleted() {
  return (
    <svg
      className={IconsCSS.uncompleted}
      fill="#0084CE"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.999 0.8c-5.081 0-9.199 4.119-9.199 9.201 0 5.080 4.118 9.199 9.199 9.199s9.2-4.119 9.2-9.199c0-5.082-4.119-9.201-9.2-9.201zM10 13.001c-1.657 0-3-1.344-3-3s1.343-3 3-3c1.656 0 3 1.344 3 3s-1.344 3-3 3z"></path>
    </svg>
  );
}