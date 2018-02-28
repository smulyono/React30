/* importing styles from `./assets/styles/index.css */
// import "./assets/styles/index.css";

// Make modifications where only one panel is active
const panels = document.querySelectorAll(".panel");
const panelArray = Array.from(panels);
let openPanel = undefined;

function panelOnClick(e){
    if (openPanel && this !== openPanel) {
        // remove older
        openPanel.classList.remove("open");
        this.classList.add("open");
    } else if (this == openPanel) {
        this.classList.toggle("open");
    } else {
        this.classList.add("open");
    }
    openPanel = this;
}

function panelSlide(e){
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("slides");
    }
}

panelArray.map((item) => {
    item.addEventListener("click", panelOnClick);
    item.addEventListener("transitionend", panelSlide);
});
