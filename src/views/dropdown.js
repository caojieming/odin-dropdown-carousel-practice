export function toggleDropdown() {
    const dropBtn = document.querySelector(".drop-btn");
    const dropContent = document.querySelector(".drop-content");
    
    dropBtn.classList.toggle("drop-btn-active");
    dropContent.classList.toggle("show");
}
