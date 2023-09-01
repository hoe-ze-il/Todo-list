import IconsCSS from "./Icons.module.css";

function IconEmptyStarColor() {
  return (
    <svg
      className={IconsCSS["empty-star-color"]}
      fill="#0084CE"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.8 8.022h-6.413l-2.387-6.722-2.389 6.722h-6.412l5.232 3.947-1.871 6.929 5.44-4.154 5.438 4.154-1.869-6.929 5.231-3.947zM10 12.783l-3.014 2.5 1.243-3.562-2.851-2.3 3.522 0.101 1.1-4.040 1.099 4.040 3.521-0.101-2.851 2.3 1.243 3.562-3.012-2.5z"></path>
    </svg>
  );
}

export default IconEmptyStarColor;