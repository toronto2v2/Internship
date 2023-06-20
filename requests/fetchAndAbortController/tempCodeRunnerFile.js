function* firstGenerator () {
    yield 1
    yield 2
    yield 3
};


function* secondGen () {
    yield* firstGenerator();
    yield* firstGenerator();
}


const generator = secondGen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());