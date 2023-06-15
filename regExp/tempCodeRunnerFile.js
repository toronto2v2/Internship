// RegExp.prototype.exec(str)
// Виконує пошук зпівпадіння регулярного виразу з вказаним рядком. Але повертає масив з результатом або null
const execStr = 'Misha 26 is 24';
const execRegExp = /\d+/ig;
console.log(execRegExp.exec(execStr));
console.log(execRegExp.exec(execStr));
console.log(execRegExp.exec(execStr));