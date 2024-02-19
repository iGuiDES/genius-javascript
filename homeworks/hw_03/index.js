// --1--
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
//
// //
//
const fruts = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
];

const fruitsNamesArr = (
    fruts.map(item => item.name)
)

console.log(fruitsNamesArr);

// --2--
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// --3--
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log(`цифра ${i}!`);
// }

let i = 0;

while (i < 5) {
    console.log(`цифра ${i}!`);
    i++
}

// --4--
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
// Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
// Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
//
while (true) {
    const userNumber = +prompt('Введіть число > 100', '');

    if (userNumber > 0 && userNumber <= 100) {
        console.log(`Спробуйте ще раз, число ${userNumber} повинно бути більшим!`);
    } else if (userNumber > 100) {
        console.log('Програма завершила свою роботу!');
        break;
    } else {
        console.log('Сталася помилка. Користувач не ввів дані, ввів порожню стрічку або скасував ввід');
        break;
    }
}


// --5--
// Вирахуйте середній вік
const girls = [
    { age: 23, name: "Оля" },
    { age: 29, name: "Аня" },
    { age: 10, name: "Юля" },
    { age: 20, name: "Катя" },
];
let middleAgeResult = 0;

const middleAgeArr = girls.map(girl => girl.age);

for (let i = 0; i < middleAgeArr.length; i++) {
    middleAgeResult += middleAgeArr[i];
}

console.log(`Середній вік сладає - "${middleAgeResult / middleAgeArr.length}" років.`);