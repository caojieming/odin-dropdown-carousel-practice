export let curIdx = 0;

// for prev/next "button" clicks
export function changeSlideBy(n) {
    showSlide(curIdx += n);
}

// for index dot clicks
export function changeSlideTo(n) {
    showSlide(curIdx = n);
}


function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    
    // wraps from end to start
    if (n > slides.length - 1) {
        curIdx = 0;
    }
    // wraps from start to end
    if (n < 0) {
        curIdx = slides.length - 1;
    }

    // for all slides, disable visibility
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // for all dots, remove active class if it exists
    for (let i = 0; i < dots.length; i++) {
        // className gives all the classes in a single string, delimited by spaces
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[curIdx].style.display = "block";
    dots[curIdx].className += " active";

    // auto revolving slides
    setTimeout(() => changeSlideBy(1), 5000);
} 
