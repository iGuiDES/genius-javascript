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

const shop = function() {
    let totalCost = this.price * this.amount;

    return `Назва товару: "${this.name}".\nВартість товару: "${totalCost}" гривні.\n`;
}

const costBanana = shop.call(banana);
const costCherry = shop.call(cherry);
const costOrange = shop.call(orange);

console.log(costBanana);
console.log(costCherry);
console.log(costOrange);