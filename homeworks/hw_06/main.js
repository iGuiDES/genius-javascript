// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери вивести данні

class Abonent {
    constructor() {
        this.userName = '';
        this.userPhone = '';
    }

    set setUserData({name, phone}) {
        this.userName = name;
        this.userPhone = phone;
    }

    get getUserData() {
        return `
            User name: ${this.userName}. 
            User phone number: ${this.userPhone}
        `;
    }
}

const userOne = new Abonent();
userOne.setUserData = {
    name: 'Oleksandr',
    phone: '+38(068)-00-00-000'
};

const userTwo = new Abonent();
userTwo.setUserData = {
    name: 'Stanislav',
    phone: '+38(097)-00-00-000'
};

const userThree = new Abonent();
userThree.setUserData = {
    name: 'Svitlana',
    phone: '+38(098)-00-00-000'
};


console.log(userOne.getUserData);
console.log(userTwo.getUserData);
console.log(userThree.getUserData);