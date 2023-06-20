function* modifyYield () {
    const a = yield 1;
    const b = yield 5 + a;
    const c = yield 3 + b;
};


const modifyYieldInstanced = modifyYield();
console.log(modifyYieldInstanced.next());
console.log(modifyYieldInstanced.next(3));
console.log(modifyYieldInstanced.next(2));
console.log(modifyYieldInstanced.next(5));