// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте це на варіантах 1, 0, -3.

let numberOne = -3;

if (numberOne > 0) {
    console.log(true);
} else {
    console.log(false);
}

// Якщо змінна ="test" - виведіть true,
// Перевірте це на варіантах 'test', "qwerty", true

let strValue = "test";

if (strValue === "test") {
    console.log(true);
} else {
    console.log("Не входить в умову");
}

// Якщо змінна більше 10 - відніміть 5,
// менше - додайте 5, результат виведіть в консоль
// Перевірте це на варіантах 1, 10, 13.

let numberTwo = 13;

if (numberTwo > 10) {
    console.log(numberTwo - 5);
} else if (numberTwo <= 10) {
    console.log(numberTwo + 5);
}

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

const userValueOne = +prompt("Введіть ціле число від 1 до 12:", "12");

switch (userValueOne) {
    case 1:
        console.log(`${userValueOne} - це місяць січень`);
        break;
    case 2:
        console.log(`${userValueOne} - це місяць лютий`);
        break;
    case 3:
        console.log(`${userValueOne} - це місяць березень`);
        break;
    case 4:
        console.log(`${userValueOne} - це місяць квітень`);
        break;
    case 5:
        console.log(`${userValueOne} - це місяць травень`);
        break;
    case 6:
        console.log(`${userValueOne} - це місяць червень`);
        break;
    case 7:
        console.log(`${userValueOne} - це місяць липень`);
        break;
    case 8:
        console.log(`${userValueOne} - це місяць серпень`);
        break;
    case 9:
        console.log(`${userValueOne} - це місяць вересень`);
        break;
    case 10:
        console.log(`${userValueOne} - це місяць жовтень`);
        break;
    case 11:
        console.log(`${userValueOne} - це місяць листопад`);
        break;
    case 12:
        console.log(`${userValueOne} - це місяць грудень`);
        break;
    default:
        console.log(`${userValueOne} - такого місяця немає в календарі`);
}

//Зробіть сервіс який отримує тризначне число //Поверніть користувачу сумму цих чисел

const userNumberOne = +prompt("Введіть своє перше число", "10");
const userNumberTwo = +prompt("Введіть своє друге число", "20");
const userNumberThree = +prompt("Введіть своє третє число", "30");
let result = 0;

result = userNumberOne + userNumberTwo + userNumberThree;
console.log(`В результаті додавання ${userNumberOne}, ${userNumberTwo}, ${userNumberThree} Ви отримали - ${result}`);
