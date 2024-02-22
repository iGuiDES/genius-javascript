// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

const showStudentInformation = function() {
    return `
            Імʼя студента: "${this.name}"
            Спеціальність: "${this.specialty}"
            Середній бал: ${this.averageGrade}
            Пропущених: ${this.missedClasses}
        `;
};

const studentOne = {
    name: "Oleksandr",
    specialty: "Full Stack Developer",
    averageGrade: 4.4,
    missedClasses: 3
};

const studentTwo = {
    name: "Stanislav",
    specialty: "JavaScript Developer",
    averageGrade: 4.7,
    missedClasses: 2
};

const studentThree = {
    name: "Svitlana",
    specialty: "UX / UI Designer",
    averageGrade: 5.0,
    missedClasses: 0,
};

const callFirstStudentInfo = showStudentInformation.call(studentOne);
const callSecondStudentInfo = showStudentInformation.apply(studentTwo);

const newFnShowStudentInfo = showStudentInformation.bind(studentThree);
const callTreatyStudentInfo = newFnShowStudentInfo();

console.log(callFirstStudentInfo);
console.log(callSecondStudentInfo);
console.log(callTreatyStudentInfo);

