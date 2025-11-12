import "./styles.css";
import { toggleDropdown } from "./views/dropdown.js";
import { curIdx, changeSlideBy, changeSlideTo } from "./views/carousel.js";

export function init() {
    const dropBtn = document.querySelector(".drop-btn");
    dropBtn.addEventListener("click", toggleDropdown);

    const prevSlideA = document.querySelector("a.prev");
    const nextSlideA = document.querySelector("a.next");
    prevSlideA.addEventListener("click", () => changeSlideBy(-1));
    nextSlideA.addEventListener("click", () => changeSlideBy(1));

    const idxDots = document.querySelectorAll(".index .dot");
    for(let i = 0; i < idxDots.length; i++) {
        idxDots[i].addEventListener("click", () => changeSlideTo(i));
    }

    // initial slide
    changeSlideTo(curIdx);
}
