// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має
// видати коротке визначення що це таке

const messages = {
    html: "HTML (англ. Hyper Text Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
    css: "Cascading Style Sheets) — спеціальна мова, що використовується для запису оформлення сторінок, написаних мовами розмітки даних.",
};

const showHTMLInfo = () => {
    document.querySelector(".content").innerHTML = messages.html;
};

const showCSSInfo = () => {
    document.querySelector(".content").innerHTML = messages.css;
};

const btnHTML = document.querySelector("#btn-html");
const btnCSS = document.querySelector("#btn-css");


btnHTML.addEventListener("click", showHTMLInfo);
btnCSS.addEventListener("click", showCSSInfo);