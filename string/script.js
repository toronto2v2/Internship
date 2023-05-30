

/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.at()                                    |
|________________________________________________________________________________________| */
let at;
// повертає символ під числом, яке вказуєм в аргументі
// якщо аргумент починається з мінуса, то відлік іде з кінця

'The quick brown fox jumps over the lazy dog.'.at(); // 'T'
'The quick brown fox jumps over the lazy dog.'.at({}); // 'T'
'The quick brown fox jumps over the lazy dog.'.at(NaN); // 'T'
'The quick brown fox jumps over the lazy dog.'.at([2,5]); // 'T'
'The quick brown fox jumps over the lazy dog.'.at(null); // 'T'
'The quick brown fox jumps over the lazy dog.'.at(undefined); // 'T'
'The quick brown fox jumps over the lazy dog.'.at(123n); // 'TypeError: Cannot convert a BigInt value to a number'
'The quick brown fox jumps over the lazy dog.'.at(5); // u
'The quick brown fox jumps over the lazy dog.'.at([5]); // u
'The quick brown fox jumps over the lazy dog.'.at(-3); // d
'The quick brown fox jumps over the lazy dog.'.at('-3'); // d
'The quick brown fox jumps over the lazy dog.'.at([]); // 's'
'The quick brown fox jumps over the lazy dog.'.at(Infinity); // 'undefined'
'The quick brown fox jumps over the lazy dog.'.at(32523532); // undefined



/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.charAt()                                |
|________________________________________________________________________________________| */
let charAt;

// String.prototype.charAt() - це метод, який повертає символьні рядки, вказані за індексом в аргументі.
// Якщо індекс знаходиться за межами рядка, метод поверне порожній рядок:

'string'.charAt(2); // r
'string'.charAt(NaN); // s
'string'.charAt([]); // 's'
'string'.charAt([1]); // t
'string'.charAt([1,3]); // s
'string'.charAt({}); // s
'string'.charAt(false); // s
'string'.charAt(null); // s
'string'.charAt(undefined); // s
'string'.charAt(true); // t
'string'.charAt('2'); // r
'string'.charAt(24); // ''
'string'.charAt('24'); // ''
'string'.charAt(-24); // ''
'string'.charAt('-24'); // ''



console.log(); // r



/*
__________________________________________________________________________________________
|                                                                                        |
|                                  String.fromCharCode()                                 |
|________________________________________________________________________________________| */
let fromCharCode

// Статичний метод String.fromCharCode() повертає рядок, створений із зазначеної послідовності значень одиниць коду UTF-16.
// робить з кода рядок
String.fromCharCode(65, 66, 67);  // "ABC"
String.fromCharCode('66') // 'B'
String.fromCharCode([66]) // 'B'
String.fromCharCode([66,5]) // ''
String.fromCharCode('gsf')  // ''
String.fromCharCode('655545458787231248748745')  // ''
String.fromCharCode(123n)  // TypeError: Cannot convert a BigInt value to a number





/*
__________________________________________________________________________________________
|                                                                                        |
|                           String.prototype.charCodeAt()                                |
|________________________________________________________________________________________| */
let charCodeAt
// виводить з певного символа рядку код

'ABC'.charCodeAt(0); // поверне 65
'ABC'.charCodeAt('0'); // поверне 65
'ABC'.charCodeAt([]); // поверне 65
'ABC'.charCodeAt([2,2]); // поверне 65
'ABC'.charCodeAt([1]); // поверне 66
'ABC'.charCodeAt({}); // поверне 65
'ABC'.charCodeAt('1'); // поверне 66
'ABC'.charCodeAt('0001'); // поверне 66
'ABC'.charCodeAt('00014214'); // поверне NaN
'ABC'.charCodeAt(Infinity); // поверне NaN
'ABC'.charCodeAt('53'); // поверне NaN
'ABC'.charCodeAt(123n); // TypeError: Cannot convert a BigInt value to a number







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.concat()                                 |
|________________________________________________________________________________________| */
let concat
// Метод concat() об’єднує текст із двох або більше рядків і повертає новий рядок.

const str1 = 'Hi ';
const str2 = 'Misha';

const finalstr =  str1.concat([str2, 'age ', 25, {},'123', null, undefined, Infinity,5n]) // Hi Misha, welcome[object Object]123nullundefinedInfinity5

/* краще робити так: */ string + 5 + null + undefined + 125n + {}

console.log(finalstr);






/*
__________________________________________________________________________________________
|                                                                                        |
|   String.prototype.startsWith()                 String.prototype.endsWith()              |
|________________________________________________________________________________________| */
let startsWith
let endsWith
/* Приймає два параметри. Рядок який ми шукаєм і другий не обовязковий параметр - Кінцева позиція, у 
якій очікується пошук рядка пошуку (індекс останнього символу рядка пошуку плюс 1). За замовчуванням 
str.length. */

// чутливий до рЕгІсТрУ

const str = "To be, or not to be, that is the question.67";

str.endsWith("question."); // true
str.endsWith("to be"); // false
str.endsWith("to be", 19); // true
str.endsWith(67); // true
str.endsWith(67n); // true
undefined,NaN, null, Boolean // будуть перетворені на рядок
str.endsWith(/7/g); // TypeError:
str.endsWith(67,100); // true (замість 100 підставило str.length)







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.includes()                               |
|________________________________________________________________________________________| */
let includes
// Метод includes() перевіряє, чи містить рядок заданий підрядок, і повертає, відповідно true або false.
// приймає два аргументи - 1.що шукати 2. з якої позиції шукати (за замовчуванням 0)

// чутливий до рЕгІсТрУ


const strng = "To be, or not to be, that is the question.";

strng.includes("To be"); // true
strng.includes(""); // true
strng.includes("question"); // true
strng.includes([]); //  true бо приводиться до пустого рядку
strng.includes(['question']); // true
strng.includes(['question', 'to be']); // true
strng.includes("nonexistent"); // false
strng.includes("question", 21412); // false бо дуже велика позиція
strng.includes({2:5}); // false
strng.includes("To be", 1); // false
strng.includes("TO BE"); // false
str.includes(/7/g); // TypeError:
undefined,NaN, Infinity,null, Boolean // будуть перетворені на рядок







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.indexOf()                                |
|________________________________________________________________________________________| */
let indexOf
// приймає два параметри: 1. рядок який шукаєм 2. з якої позиції починаєм
// повертає нам індекс першого знайденого співпадіння
// якщо не знаходить повертає -1

// другий прараметр за замовчуванням 0

// чутливий до рЕгІсТрУ

"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf([]); // returns  0
"Blue Whale".indexOf(['Whale']); // returns  5
"Blue Whale".indexOf(['Whale',' Blue']); // returns  -1
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(/Whale/); // returns -1
"Blue Whale".indexOf({}); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", -5); // returns  5 індекс -5 буде замінений на 0
"Blue Whale".indexOf("", 9); // returns  9
"Blue undefined".indexOf(); // returns  -1   було підставлене undefined, зконвертоване в рядок і не знайдене
undefined,NaN,Infinity, null, Boolean // будуть перетворені на рядок



/*
__________________________________________________________________________________________
|                                                                                        |
|                           String.prototype.lastIndexOf()                               |
|________________________________________________________________________________________| */
let lastIndexOf
// приймає два параметри: 1. рядок який шукаєм 2. з якої позиції починаєм
// повертає індек останнього знайденого співпадіння
// якщо не знаходить повертає -1

// другий прараметр за замовчуванням Infinity


// чутливий до рЕгІсТрУ


"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0 індекс -5 замінений на 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5 повертає довжину рядка + 1
"canal".lastIndexOf("", 2); // returns 2
"canal".lastIndexOf();// returns  -1   було підставлене undefined, зконвертоване в рядок і не знайдене

undefined,NaN,Infinity, null, Boolean // будуть перетворені на рядок







/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.match()                                 |
|________________________________________________________________________________________| */
let match
// Метод match() повертає збіги при зіставленні рядка з регулярним виразом.
// використовуй прапор g щоб знайти всі співпадіння

// якщо співпадіння нема, то повертає null

const strReg = "For more for more for more";

strReg.match('more')// ['more', index: 4, input: "For more for more for more", groups:undefined]
strReg.match('moreee')// null
strReg.match(/for/gi); // ['for', 'for', 'for']


strReg.match('more', 'for')// null
strReg.match({});  // ['o',index: 1,input: 'For more for more for more',groups: undefined]
                   // обєкт перетворюєся на рядок [object Object] і інтерпритується як
                   // регулярний вираз /[object Object]/ 

strReg.match([]); // ['',index: ,input: 'For more for more for more',groups: undefined]
strReg.match(['more']) // ['more',index:4 ,input: 'For more for more for more',groups: undefined]
strReg.match(['more', 'for']) // null

undefined,NaN,Infinity, null, Boolean // будуть перетворені на рядок








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.matchAll()                                 |
|________________________________________________________________________________________| */
let matchAll
// використовується коли потрібно виконати додаткову обробку збігів, або якщо ви хочете
//  отримати доступ до інформації про збіги та групи захоплення за допомогою ітератора

// працює майже так само як match

// повертає Object [RegExp String Iterator] {}
// по якому можна пройтись, якщо співпадінь немає, то поверне пустий масив, рядок

const str6 = "Hello, world!";
const regex = /[ag]/g;


str6.matchAll('hello'); // ----> [...змінна] ----> [] -----> '';
str6.matchAll(/hello/); // TypeError: String.prototype.matchAll called with a non-global RegExp argument;

undefined,NaN,Infinity, null, Boolean // будуть перетворені на рядок


for (const match of str6.matchAll(regex)) {
    // [ 'e', index: 1, input: 'Hello, world!', groups: undefined ]
    // [ 'd', index: 11, input: 'Hello, world!', groups: undefined ]
}








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.normalize()                                |
|________________________________________________________________________________________| */
let normalize
/* Метод normalize() JavaScript використовується для нормалізації рядків. Нормалізація - це процес 
приведення рядка до певного канонічного виду, що може бути корисним, наприклад, при порівнянні рядків, 
оскільки два схожі, але трохи різні рядки можуть мати різні коди символів, і тому вони не вважаються 
однаковими. Метод normalize() дозволяє привести рядки до певного канонічного вигляду, що дозволяє 
порівнювати їх на основі їхнього вмісту, а не на основі їхнього коду символів. */

// Метод normalize() приймає необов'язковий аргумент, який свідчить про тип нормалізації. 
// Можливі значення цього аргументу: 'NFC' (за замовчуванням), 'NFD', 'NFKC', 'NFKD'

const str4 = "café";
str.normalize(); // café

const str5 = "cafe\u0301"; // "e" з наголосом
str2.normalize(); // café


const str7 = 'Ménage à trois';
const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
console.log(normalizedStr); // "Menage a trois"








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.padEnd()                                   |
|________________________________________________________________________________________| */
let padEnd
/* Метод padEnd() є методом рядків, який дозволяє доповнити поточний рядок іншим рядком до
 заданої довжини. Якщо довжина доповнення не вказана, рядок доповнюється пробілами. */

'abc'.padEnd(10);         // "abc       "
'abc'.padEnd(10, "foo");  // "abcfoofoof"
'abc'.padEnd(6,"123456"); // "abc123"








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.padStart()                                 |
|________________________________________________________________________________________| */
let padStart
// доповнює рядок до визначеної довжини необхідним рядком. Доповнення відбувається справа

'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"








/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.repeat()                                 |
|________________________________________________________________________________________| */
let repeat

// Метод String.prototype.repeat() повертає новий рядок, що складається із зазначеної кількості
//  повторень вихідного рядка.


  
'hello '.repeat(3); // 'hello hello hello '
'hello '.repeat([3]); // 'hello hello hello'
'hello '.repeat('3'); // 'hello hello hello'
'hello '.repeat(3.6); // 'hello hello hello'
'hello '.repeat(true); // 'hello' -----> true конвертуєся в 1
'hello '.repeat([]); // ''
'hello '.repeat(false); // '' -----> false конвертуєся в 0
'hello '.repeat(undefined); // '' -----> undefined конвертуєся в 0
'hello '.repeat(0); // '';
'hello '.repeat(-1); // RangeError: Invalid count value;
'hello '.repeat(1/0); // RangeError: Invalid count value;
'hello '.repeat(Infinity); // RangeError: Invalid count value;
''.repeat(10); // ''







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.replace()                                |
|________________________________________________________________________________________| */
let replace
/* Метод String.prototype.replace() використовується для заміни підрядка в рядку на інший підрядок.
Він приймає два аргументи: перший аргумент - це підрядок, який необхідно замінити, 
а другий аргумент - це підрядок, на який необхідно замінити перший. */

'hello world world bye'.replace('world', 'there'); // hello there
'hello world world bye'.replace('world', (match) => match.toUpperCase()); // 'hello WORLD WORLD bye'
'hello world world bye'.replace(/world/, 'hell'); // hello hell world bye
'hello world world bye'.replace(/world/g, 'hell'); // hello hell hell bye
'hello world world bye'.replace(/world/g, (match,p1,p2,...rest) => match.toUpperCase()); // 'hello WORLD WORLD bye'

/* Також, як перший аргумент можна передати регулярний вираз, який дозволяє
замінювати кілька входжень підрядки одночасно: */


'The quick brown fox jumps over the lazy dog'.replace(/[aeiou]/g, ''); // "Th qck brwn fx jmps vr th lzy dg"



/* Як другий аргумент можна передати функцію, яка буде викликана для кожного входження 
підрядка, і яка поверне рядок для заміни: */

'The Quick Brown Fox Jumps over the lazy dog'.replace(/([A-Z])/g, (match, p1) => `-${p1.toLowerCase()}`);// "-the -quick -brown -fox -jumps over the lazy dog"









/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.replaceAll()                             |
|________________________________________________________________________________________| */
let replaceAll
/* Метод String.prototype.replace() використовується для заміни підрядка в рядку на інший підрядок.
Він приймає два аргументи: перший аргумент - це підрядок, який необхідно замінити, 
а другий аргумент - це підрядок, на який необхідно замінити перший. */

// замінює ВСІ входження


const str12 = 'The fox brown fox jumps over the lazy dog';
const newStr3 = str12.replaceAll('fox', 'cat');
newStr3; // "The cat brown cat jumps over the lazy dog"


const newStr4 = str12.replaceAll(/[a-f]/gi, '*');
newStr4; // "Th* *ox *rown *ox jumps ov*r th* l*zy *og"









/*
__________________________________________________________________________________________
|                                                                                        |
|                                String.prototype.search()                               |
|________________________________________________________________________________________| */

let search
/* Метод String.prototype.search() повертає індекс (позицію) першого збігу регулярного виразу 
у рядку. Якщо збіг не знайдено, метод поверне -1. */

// замість регулярного виразу можна вказати просто рядок, в такому разі він автоматично буде 
// перетворений в регулярний вираз

const strFox = 'The quick brown fox jumps over the lazy dog5';
strFox.search(/brown/); //10
strFox.search(/brOwN/i); //10
strFox.search(/brown/g); //10 ----> поверне перше знайдене
strFox.search('jumps'); //20
strFox.search('jgidj');// -1
strFox.search({});// знайде першу букву 'о', бо {} перетвориться на [object Object]
strFox.search([]);// 0, бо масив приведеться до пустого рядка '', а перший пустий рядок знаходиться на індексі 0 

strFox.search(5);// знайдеться, так як число приведеться до рядка
resultFox; // 10
resultFoxs;// 20 








/*
__________________________________________________________________________________________
|                                                                                        |
|                                String.prototype.slice()                                |
|________________________________________________________________________________________| */
let slice

/* Метод String.prototype.slice() повертає новий рядок, вирізаний з вихідного рядка. Він 
приймає два параметри: індекс початку та кінця вирізання (кінцевий індекс не 
включається до вирізаної частини).
*/

const str13 = 'Hello, world!';

str13.slice(0, 5); // "Hello"
str13.slice(7, 12); // "world"
str13.slice(-6); // "world!"
str13.slice(7); // "world!"
str13.slice(7, -8); // ""




str13.slice(5, 0); // ПОВЕРНЕ ПУСТИЙ РЯДОК ''
str13.slice(100); // ПОВЕРНЕ ПУСТИЙ РЯДОК ''
str13.slice(0, 125); // ПОВЕРНЕ цілий рядок 'Hello, world!'
str13.slice(0); // ПОВЕРНЕ цілий рядок 'Hello, world!'

const str13Copy = str13.slice(); // 'Hello, world!' - повна копія





/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.substring()                              |
|________________________________________________________________________________________| */
let substring
/* Метод substring() є одним із методів рядків у JavaScript і використовується для вилучення 
підрядка з рядка. Цей метод приймає два параметри: індекс початку та індекс кінця підрядка.
Якщо параметри не вказані, метод поверне весь вихідний рядок. Якщо вказано лише один параметр, то
метод поверне підрядок починаючи з вказаного індексу до кінця рядка. */


const strWorld = 'Hello world!';

strWorld.substring(0, 5); // "Hello"
strWorld.substring(6); // "world!"
strWorld.substring(0); // "Hello world!"

// Зверніть увагу, що якщо перший параметр більший за другий, то метод substring() поміняє їх місцями:
strWorld.substring(5, 0); // "Hello"

// якщо передати мінусовий аргумент, то він автоматично перетвориться на 0
strWorld.substring(3, -3); // 'Hel'






/*
__________________________________________________________________________________________
|                                                                                        |
|                                String.prototype.split()                                |
|________________________________________________________________________________________| */
let split
/* Метод split() використовується для поділу рядка на масив підрядків на основі вказаного 
роздільника. Метод приймає один параметр – роздільник, який може бути як рядком, 
так і регулярним виразом. */

'The quick brown fox'.split(" "); // роздільник  пробіл ["The", "quick", "brown", "fox"]
'The quick brown fox'.split(); // ['The quick brown fox'] 

// другим параметром можна передати максимальну кількість елементів в результуючому масиві

'The quick brown fox'.split(" ", 2 ); // // ["The", "quick"]

split;

at;
charAt;

fromCharCode;
charCodeAt;

concat;

startsWith;
endsWith;

includes;

indexOf;
lastIndexOf;

normalize;

slice;
substring;

match;
matchAll;

replace;
replaceAll;

repeat;
search;

padEnd;
padStart;
