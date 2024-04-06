// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const getTextPage = document.querySelector("#text");
const getBtn = document.querySelector("#task-1");

getBtn.addEventListener("click", () => {
    getTextPage.classList.add("hidden");
});


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const btnHidden = document.querySelector("#task-2");
const getInfoText = document.querySelector("#info");

btnHidden.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
    if (e.target.classList.contains("hidden")) {
        getInfoText.innerText = "Not visible btn";
    }
});


// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const allLiElements = document.querySelectorAll("#task-3 li");

allLiElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.stopPropagation();

        let children = event.target.querySelector("ul");

        if (children) {
            children.classList.toggle("hidden");
        }
    });
});
