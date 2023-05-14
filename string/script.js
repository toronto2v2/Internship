

/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.at()                                    |
|________________________________________________________________________________________| */

// повертає символ під числом, яке вказуєм в аргументі
// якщо аргумент починається з мінуса, то відлік іде з кінця

'The quick brown fox jumps over the lazy dog.'.at(5); // u
'The quick brown fox jumps over the lazy dog.'.at(-3); // d








/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.charAt()                                |
|________________________________________________________________________________________| */


// String.prototype.charAt() - це метод, який повертає символьні рядки, вказані за індексом в аргументі.
// Якщо індекс знаходиться за межами рядка, метод поверне порожній рядок:

'string'.charAt(2); // r
'string'.charAt(24); // ''









/*
__________________________________________________________________________________________
|                                                                                        |
|                                  String.fromCharCode()                                 |
|________________________________________________________________________________________| */


// Статичний метод String.fromCharCode() повертає рядок, створений із зазначеної послідовності значень одиниць коду UTF-16.
// робить з кода рядок
String.fromCharCode(65, 66, 67);  // "ABC"







/*
__________________________________________________________________________________________
|                                                                                        |
|                           String.prototype.charCodeAt()                                |
|________________________________________________________________________________________| */


// виводить з певного символа рядку код

'ABC'.charCodeAt(0); // поверне 65






/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.concat()                                 |
|________________________________________________________________________________________| */

// Метод concat() об’єднує текст із двох або більше рядків і повертає новий рядок.

const str1 = 'Hi ';
const str2 = 'Misha';

const finalstr =  str1.concat(str2, ', welcome') // Hi Misha, welcome








/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.endsWith()                               |
|________________________________________________________________________________________| */

/* Приймає два параметри. Рядок який ми шукаєм і другий не обовязковий параметр - Кінцева позиція, у 
якій очікується пошук рядка пошуку (індекс останнього символу рядка пошуку плюс 1). За замовчуванням 
str.length. */

const str = "To be, or not to be, that is the question.";

str.endsWith("question."); // true
str.endsWith("to be"); // false
str.endsWith("to be", 19); // true








/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.includes()                               |
|________________________________________________________________________________________| */

// Метод includes() перевіряє, чи містить рядок заданий підрядок, і повертає, відповідно true або false.
// приймає два аргументи - 1.що шукати 2. з якої позиції шукати (за замовчуванням 0)

const strng = "To be, or not to be, that is the question.";

strng.includes("To be"); // true
strng.includes("question"); // true
strng.includes("nonexistent"); // false
strng.includes("To be", 1); // false
strng.includes("TO BE"); // false
strng.includes(""); // true







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.indexOf()                                |
|________________________________________________________________________________________| */

// приймає два параметри: 1. рядок який шукаєм 2. з якої позиції починаєм
// повертає нам індекс першого знайденого співпадіння
// якщо не знаходить повертає -1

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10






/*
__________________________________________________________________________________________
|                                                                                        |
|                           String.prototype.lastIndexOf()                               |
|________________________________________________________________________________________| */

// приймає два параметри: 1. рядок який шукаєм 2. з якої позиції починаєм
// повертає індек останнього знайденого співпадіння
// якщо не знаходить повертає -1

"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2








/*
__________________________________________________________________________________________
|                                                                                        |
|                               String.prototype.match()                                 |
|________________________________________________________________________________________| */

// Метод match() повертає збіги при зіставленні рядка з регулярним виразом.
// використовуй прапор g щоб знайти всі співпадіння
const strReg = "For more for more for more";
const re = /for/gi;
const found = strReg.match(re);

console.log(found) // ['for', 'for', 'for']








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.matchAll()                                 |
|________________________________________________________________________________________| */

// використовується коли потрібно виконати додаткову обробку збігів, або якщо ви хочете
//  отримати доступ до інформації про збіги та групи захоплення за допомогою ітератора


const str6 = "Hello, world!";
const regex = /[a-h]/g;


for (const match of str6.matchAll(regex)) {
    // [ 'e', index: 1, input: 'Hello, world!', groups: undefined ]
    // [ 'd', index: 11, input: 'Hello, world!', groups: undefined ]
}








/*
__________________________________________________________________________________________
|                                                                                        |
|                            String.prototype.normalize()                                |
|________________________________________________________________________________________| */

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


// Метод String.prototype.repeat() повертає новий рядок, що складається із зазначеної кількості
//  повторень вихідного рядка.

'hello '.repeat(3); // 'hello hello hello '
'123'.repeat(5); // '123123123123123'
''.repeat(10); // ''







/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.replace()                                |
|________________________________________________________________________________________| */

/* Метод String.prototype.replace() використовується для заміни підрядка в рядку на інший підрядок.
Він приймає два аргументи: перший аргумент - це підрядок, який необхідно замінити, 
а другий аргумент - це підрядок, на який необхідно замінити перший. */
const str8 = 'hello world';
const newStr = str.replace('world', 'there');
newStr; // "hello there"

/* Також, як перший аргумент можна передати регулярний вираз, який дозволяє
замінювати кілька входжень підрядки одночасно: */

const str9 = 'The quick brown fox jumps over the lazy dog';
const newStr2 = str.replace(/[aeiou]/g, '');
newStr; // "Th qck brwn fx jmps vr th lzy dg"



/* Як другий аргумент можна передати функцію, яка буде викликана для кожного входження 
підрядка, і яка поверне рядок для заміни: */

const str11 = 'The Quick Brown Fox Jumps over the lazy dog';
const newStr1 = str11.replace(/([A-Z])/g, (match, p1) => `-${p1.toLowerCase()}`);
newStr1; // "-the -quick -brown -fox -jumps over the lazy dog"









/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.replaceAll()                             |
|________________________________________________________________________________________| */

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


/* Метод String.prototype.search() повертає індекс (позицію) першого збігу регулярного виразу 
у рядку. Якщо збіг не знайдено, метод поверне -1. */

// замість регулярного виразу можна вказати просто рядок, в такому разі він автоматично буде 
// перетворений в регулярний вираз

const strFox = 'The quick brown fox jumps over the lazy dog';
const resultFox = strFox.search(/brown/);
const resultFoxs = strFox.search('jumps');
resultFox; // 10
resultFoxs;// 20 








/*
__________________________________________________________________________________________
|                                                                                        |
|                                String.prototype.slice()                                |
|________________________________________________________________________________________| */


/* Метод String.prototype.slice() повертає новий рядок, вирізаний з вихідного рядка. Він 
приймає два параметри: індекс початку та кінця вирізання (кінцевий індекс не 
включається до вирізаної частини).
*/

const str13 = 'Hello, world!';

str13.slice(0, 5); // "Hello"
str13.slice(7, 12); // "world"
str13.slice(-6); // "world!"
str13.slice(7); // "world!"

str13.slice(5, 0); // ПОВЕРНЕ ПУСТИЙ РЯДОК ''

const str13Copy = str13.slice(); // 'Hello, world!' - повна копія








/*
__________________________________________________________________________________________
|                                                                                        |
|                              String.prototype.substring()                              |
|________________________________________________________________________________________| */

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

/* Метод split() використовується для поділу рядка на масив підрядків на основі вказаного 
роздільника. Метод приймає один параметр – роздільник, який може бути як рядком, 
так і регулярним виразом. */

const str14 = "The quick brown fox";
const words = str14.split(" "); // роздільника - пробіл
words; // ["The", "quick", "brown", "fox"]

// другим параметром можна передати максимальну кількість елементів в результуючому масиві

const wordsRestricted = str14.split(" ", 2 ); // // ["The", "quick"]



