import React from "react";
import IconsCSS from "./Icons.module.css";

export default function IconUnComplete() {
  return (
    <svg
      className={IconsCSS.uncomplete}
      fill="#0084CE"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.301 0 9.6-4.298 9.6-9.601 0-5.301-4.299-9.599-9.6-9.599zM10 17.599c-4.197 0-7.6-3.402-7.6-7.6s3.402-7.599 7.6-7.599c4.197 0 7.601 3.402 7.601 7.6s-3.404 7.599-7.601 7.599z"></path>
    </svg>
  );
}
