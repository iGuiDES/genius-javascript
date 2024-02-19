// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Батьки дозволили?");
//     }
// }
// --- 1 ---
const checkAge = (age) => {
    return age > 18 ? true : confirm('Батьки дозволили?');
}

checkAge(17);

// --- 2 ---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

const min = function(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

const result = min(18, 25);
console.log(result);


// --- 3 ---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
//
// ask(
//     "Ви згодні?",
//     function() {
//         alert("Ви погодились.");
//     }, function() {
//         alert("Ви скасували виконання.");
//     },
// );

const askUser = (question, yes, no) => confirm(question) ? yes() : no();

askUser(
    "Ви згодні?",
    () => alert('Ви погодилися.'),
    () => alert('Ви скасували виконання.')
)


