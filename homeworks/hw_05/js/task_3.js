// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
//     1) banana 30, 4,5
//     2) cherry 58, 1,3
//     3) orange 89. 3,4

const banana = {
    name: 'Banana',
    price: 30,
    amount: 4.5
}

const cherry = {
    name: 'Cherry',
    price: 58,
    amount: 1.3
}

const orange = {
    name: 'Orange',
    price: 89,
    amount: 3.4
}

const shop = function(product) {
    let totalCost = product.price * product.amount;

    return `Назва товару: "${product.name}".\nВартість товару: "${totalCost}" гривні.\n`;
}

const costBanana = shop(banana);
const costChery = shop(cherry);
const costOrange = shop(orange);

console.log(costBanana);
console.log(costChery);
console.log(costOrange);