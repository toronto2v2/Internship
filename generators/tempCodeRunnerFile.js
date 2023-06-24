function* modifyYield () {
    const a = yield 1;
    const b = yield 5 + a;
    const c = yield 3 + b;
};


const modifyYieldInstanced = modifyYield();
console.log(modifyYieldInstanced.next());   //{ value: 1, done: false }
console.log(modifyYieldInstanced.next(3));  //{ value: 8, done: false } - аргумент з next, записав в змінну а генератору modifyYield число 5
console.log(modifyYieldInstanced.next(2)); //{ value: 5, done: false }- аргумент з next, записав в змінну b генератору modifyYield число 2
console.log(modifyYieldInstanced.next(5));  //{ value: undefined, done: true }