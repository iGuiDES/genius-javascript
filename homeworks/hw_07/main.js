// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

class Calculator {
    constructor() {
        this.fisrtNumber = 0;
        this.secondNumber = 0;
    }

    read() {
        this.fisrtNumber = +prompt("Введіть ціле число", "");
        this.secondNumber = +prompt("Введіть ціле число", "");
    }

    sum() {
        return this.fisrtNumber + this.secondNumber;
    }

    mul() {
        return this.fisrtNumber * this.secondNumber;
    }
}

const calcOne = new Calculator();

calcOne.read();
const sumUserNumber = calcOne.sum();
const mulUserNumber = calcOne.mul();

if (isNaN(calcOne.fisrtNumber) === true || isNaN(calcOne.secondNumber) === true) {
    document.querySelector(".result").innerHTML = `
        <p>Виникла помилка, ви ввели не числовий тип даних</p>
    `;
} else {
    document.querySelector(".result").innerHTML = `
        <p>В результаті <b>додавання</b> чисел, отримано результат - <b>${sumUserNumber}</b></p>
        <p>В результаті <b>множення</b> чисел, отримано результат - <b>${mulUserNumber}</b></p>
    `;
}

console.log(isNaN(calcOne.fisrtNumber));
console.log(isNaN(calcOne.secondNumber));