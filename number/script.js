

/*
__________________________________________________________________________________________
|                                                                                        |
|                                   Number.isFinite()                                    |
|________________________________________________________________________________________| */
let isFinite;
// Перевіряє чи передане значення це число і чи є воно кінцевим ( не нескінченність / не інші типи данних)

Number.isFinite(3); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite("123"); // false (перетвориться в число)
Number.isFinite(true); // false (перетвориться в число)
Number.isFinite(null); // false (перетвориться в число)
Number.isFinite(); // false
Number.isFinite(undefined); // false

// також існує глобальна фунція isFinite(), але вона перед перевіркою приводить значення до числа
isFinite('123') // true 
isFinite(true) // true => true приводиться до числа і = 1. false = 0
isFinite('') // true => пустий рядок приводиться до числа і = 0
isFinite(null) //true => null це 0



/*
__________________________________________________________________________________________
|                                                                                        |
|                                  Number.isInteger()                                    |
|________________________________________________________________________________________| */
// перевіряє чи є передане число цілим, без плаваючої коми.


let isInteger;

Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true через те, що по технічним причинам таке велике число округляється

console.log(Number.isInteger(-5.02));

/*
__________________________________________________________________________________________
|                                                                                        |
|                                Number.isSafeInteger()                                  |
|________________________________________________________________________________________| */

let isSafeInteger;

// Метод Number.isSafeInteger() використовується для перевірки того, чи є число "безпечним" цілим 
// числом. "Безпечне" ціле число - це ціле число, яке може бути точно представлене в JavaScript без втрати 
// точності. Інакше кажучи, це ціле число діапазоні від -2^53 + 1 до 2^53 - 1.

Number.isSafeInteger(3);                    // true

Number.isSafeInteger(3.0);                  // true
Number.isSafeInteger(3.1);                  // false

Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(Math.pow(2, 53));      // false

Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false


/*
__________________________________________________________________________________________
|                                                                                        |
|                                      Number.isNaN()                                    |
|________________________________________________________________________________________| */

let isNaN

/* ===============================  Number.isNaN  ======================== */
// перевіряє чи являється передане значення NaN

Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0) // true

Number.isNaN(true); //false
Number.isNaN(null);//false
Number.isNaN(37);//false
Number.isNaN('37');//false
Number.isNaN('37.37');//false
Number.isNaN('');//false
Number.isNaN(' ');//false




/*
__________________________________________________________________________________________
|                                                                                        |
|                           Number.parseFloat() / parseFloat() /                         |
|________________________________________________________________________________________| */

let parseFloat

// повертає Число з плаваючою точкою, отримане з рядка. Якщо перший символ не може бути 
// сконвертований до числа, то повертається NaN.

parseFloat(3.14); // 3.14
parseFloat('3.14'); // 3.14
parseFloat('314e-2'); // 3.14
parseFloat('0.0314E+2'); // 3.14
parseFloat('3.14some string here');//3.14

parseFloat('s3.14'); // NaN




/*
__________________________________________________________________________________________
|                                                                                        |
|                                      Number.parseInt(str, radix)                       |
|________________________________________________________________________________________| */

let parseInt

// radix - число яке представляє систему счислення

// аналізує рядок та повертає перше знайдене ціле число. Якщо перший символ у рядку не може бути
//  перетворений на число або якщо рядок порожній, функція повертає NaN.

Number.parseInt("123"); // поверне 123
Number.parseInt("123.45"); // поверне 123
Number.parseInt("123abc"); // поверне 123
Number.parseInt("abc123"); // поверне NaN
Number.parseInt("   123"); // поверне 123
Number.parseInt(""); // поверне NaN
Number.parseInt("1010", 2); // Повертає 10 (перетворює двійкове число 1010 на десяткове)
Number.parseInt("A", 16); // Повертає 10 (перетворює шістнадцяткове число A на десяткове)
Number.parseInt("455fhd jjkj jj", 16); // Повертає 455 (перетворює десяткове число на десяткове)


/*
__________________________________________________________________________________________
|                                                                                        |
|                       Number.prototype.toExponential()                                 |
|________________________________________________________________________________________| */
let toExponential
// Метод toExponential() повертає рядок, що представляє об'єкт Number в експоненційному записі.

// numObj.toExponential([fractionDigits])

/* fractionDigits -  Необов'язковий параметр. Ціле число, яке визначає кількість цифр після десяткової коми. 
За промовчанням використовується стільки цифр, скільки потрібно для вказівки числа. */


var numObj = 77.1234;


numObj.toExponential();  // виведе 7.71234e+1
numObj.toExponential(4); // виведе 7.7123e+1
numObj.toExponential(2); // виведе 7.71e+1

77.1234.toExponential(); // виведе 7.71234e+1

/* Якщо ви використовуєте метод toExponential() з числовими літералами і числовий літерал не 
має експонентів і десяткової коми, залиште пробіл перед точкою, що передує виклику методу для 
запобігання інтерпретації цієї точки як десяткової коми. */

77 .toExponential();     // виведе 7.7e+1




/*
__________________________________________________________________________________________
|                                                                                        |
|                       Number.prototype.toPrecision ()                                  |
|________________________________________________________________________________________| */
let toPrecision
// Метод toPrecision() повертає рядок, що представляє об'єкт Number із зазначеною точністю.
// toPrecision() форматує число, залишаючи певну кількість цифр.

var numObj = 5.123456;
/* обрізає кількість чисел і заокруглює якщо потрібно */
console.log(numObj.toPrecision());    // виведе '5.123456'
console.log(numObj.toPrecision(5));   // виведе '5.1235'
console.log(numObj.toPrecision(2));   // виведе '5.1'
console.log(numObj.toPrecision(1));   // виведе '5'

console.log(5.1234567.toPrecision(6));
numObj = 0.000123;
/* обрізає числа або додає нулі*/
console.log(numObj.toPrecision());    // выведет '0.000123'
console.log(numObj.toPrecision(5));   // выведет '0.00012300'
console.log(numObj.toPrecision(2));   // выведет '0.00012'
console.log(numObj.toPrecision(1));   // выведет '0.0001' 






/*
__________________________________________________________________________________________
|                                                                                        |
|                             Number.prototype.toFixed()                                 |
|________________________________________________________________________________________| */

let toFixed
// метод toFixed() форматирует число, оставляя определенное количество десятичных знаков после запятой

// ОКРУГЛЯЄ!!!

let obj = {}
let numObj = 12345.6789;

numObj.toFixed();       // поверне '12346': зверніть увагу на округлення, дробової частини немає
numObj.toFixed(1);      // поверне '12345.7': зверніть увагу на округлення
numObj.toFixed(6);      // поверне '12345.678900': зверніть увагу на доповнення нулями
(1.23e+20).toFixed(2);  // поверне '123000000000000000000.00'
(1.23e-10).toFixed(2);  // поверне '0.00'
2.34.toFixed(1);        // поверне '2.3'
-2.34.toFixed(1);       // поверне -2.3 (число) (відповідно до пріоритету операцій,
                        // негативні числові літерали не повертають рядок...)
(-2.34).toFixed(1);     // Поверне '-2.3' (рядок) (...доти, доки ви не покладете їх у круглі дужки)

obj.toFixed(1);     // TypeError: {}.toFixed is not a function


console.log((25).toFixed(2));
/*
__________________________________________________________________________________________
|                                                                                        |
|                             Number.prototype.toString()                                 |
|________________________________________________________________________________________| */

/* Number.prototype.toString() - це метод, який повертає рядкове уявлення числа. Він може приймати 
один параметр - основу системи числення (від 2 до 36), в якій потрібно вивести число. Якщо 
параметр не вказано, використовується десяткова система числення (основа 10). */

let num = 42;
let numStr = num.toString(); // "42"
let binStr = num.toString(2); // "101010"
let hexStr = num.toString(16); // "2a"





/*
__________________________________________________________________________________________
|                                                                                        |
|                             Number.prototype.valueOf()                                 |
|________________________________________________________________________________________| */


// Number.prototype.valueOf() - це метод, який повертає примітивне значення числа, на яке він викликаний.


const numbr = new Number(42); // створення об'єкта-обгортки для числа 42
const primitiveNum = numbr.valueOf(); //отримання примітивного значення числа
console.log(primitiveNum); // 42


isInteger

isSafeInteger

isNaN

isFinite

parseFloat

parseInt

toFixed

toPrecision