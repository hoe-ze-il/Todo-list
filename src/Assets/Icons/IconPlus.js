import React from "react";
import IconsCSS from "./Icons.module.css";

export default function IconPlus() {
  return (
    <svg
      className={IconsCSS.plus}
      fill="#0084CE"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
    </svg>
  );
}
