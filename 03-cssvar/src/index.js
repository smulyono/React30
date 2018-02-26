/* importing styles from `./assets/styles/index.css */
import "./assets/styles/index.css";

// /* Start of javascript */
const input = document.querySelectorAll(".controls input");

function handleUpdate(){
    window.document.documentElement.style.setProperty(`--${this.name}`,
        `${this.value}${this.dataset.metrics||""}`);
};

input.forEach(item => {
    item.addEventListener("change", handleUpdate);
});


