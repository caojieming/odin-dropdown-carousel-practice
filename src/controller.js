import "./styles.css";
// import { greeting } from "./models/model.js";
import { toggleDropdown } from "./views/view.js";

export function init() {
    const dropBtn = document.querySelector(".drop-btn");
    dropBtn.addEventListener("click", toggleDropdown);
}
