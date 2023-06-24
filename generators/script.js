// Функції генератори поступово виводять одне значення, потім інше і тд 

function* firstGen (a,b,c) {
    yield a + 1;
    yield b + 3;
    yield c + 5;
};

const generatorVariable = firstGen(1,2,3);
const firstValue = generatorVariable.next();    //{ value: 2, done: false }
const secondValue = generatorVariable.next();   //{  value: 5, done: false }
const thirdValue = generatorVariable.next();    //{ value: 8, done: false }
const forthValue = generatorVariable.next();    //{ value: undefined, done: true }









// можна отримати всі значення генератора за допомогою spread

function* secondGen (a,b,c) {
    yield a + 1;
    yield b + 2;
    yield c + 3;
};

const secondGenVar = secondGen(1,2,3);
const allGenValues = [...secondGenVar]; //  [ 2, 4, 6 ];
secondGenVar.next();    //  Подальші виклики будуть повертати { value: undefined, done: true }, адже ми вже пройшлись по всім значенням генератора в рядку вище







// Можна створювати композицію генераторів, тобто викликати генератор в іншому генераторі

function* thirdGen (a,b,c) {
    yield a + 1;
    yield b + 2;
    yield c + 3;
};

function* composedGen () {
    yield* thirdGen(1,2,3);
    yield* thirdGen(4,5,6);
}

const composedGenVar = composedGen();

composedGenVar.next();  // { value: 2, done: false }
composedGenVar.next();  // { value: 4, done: false }
composedGenVar.next();  // { value: 6, done: false }
composedGenVar.next();  // { value: 5, done: false }
composedGenVar.next();  // { value: 7, done: false }
composedGenVar.next();  // { value: 9, done: false }
composedGenVar.next();  // { value: undefined, done: true }






// yield працює в обидва боки, тобто дозволяє як віддати значення назовні, так і прийняти в себе значення з зовнішнього коду


function* modifyYield () {
    const a = yield 1;
    const b = yield 5 + a;
    const c = yield 3 + b;
};


const modifyYieldInstanced = modifyYield();
console.log(modifyYieldInstanced.next());   //{ value: 1, done: false }
console.log(modifyYieldInstanced.next(3));  //{ value: 8, done: false } - аргумент з next, записав в змінну а генератору modifyYield число 5
console.log(modifyYieldInstanced.next(2));  //{ value: 5, done: false }- аргумент з next, записав в змінну b генератору modifyYield число 2
console.log(modifyYieldInstanced.next(5));  //{ value: undefined, done: true }