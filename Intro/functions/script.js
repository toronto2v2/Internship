
// Методи call, apply,bind дозволяють надати функції певний контекст. Проте в них є певні відмінності


// 1.call(obj, arg1,arg2, ...)

/* сюди першим аргументом передається конкретний обєкт який ми хочемо привязати до функції, а далі аргументи
які безпосередньо потрібні цій функції */


let user = {
    name: "John",
    age: 30,
    

};

let user2 = {
    name: "Misha",
    age: 25,
    

};
  

function sayHi (a,b) {
    console.log(`hi ${this.name}
 B = ${b} 
 A = ${a}`);
};

sayHi.call(user,5,6);
sayHi.call(user2,7,8);


// 2.apply(obj, [arg1,arg2])
// сюди першим аргументом передається конкретний обєкт який ми хочемо привязати до функції, а далі
// МАСИВ аргументів, які потрібні функції

let user3 = {
    name: "John",
    age: 30,
    

};

let user4 = {
    name: "Misha",
    age: 25,
    

};
  

function sayHi (a,b) {
    console.log(`hi ${this.name}
 B = ${b} 
 A = ${a}`);
};

sayHi.apply(user3,[11,12]);
sayHi.apply(user4,[13,14]);



// 3.bind(obj)

// Метод bind створює нову функцію з прив'язкою до зазначеного контексту, яка може бути викликана пізніше.
// Тобто ним ми жорстко прибиваємо контекст НАЗАВЖДИ, без можливості зміни контексту в подальшому


let user5 = {
    name: "Ann",
    age: 14,
    

};

function sayHi (a,b) {
    console.log(`hi ${this.name}
 a = ${a} 
 b = ${b}`);
};

const bindArgs =  sayHi.bind(user5, 2,3);

bindArgs();



// ============================= new ==============================================

// Оператор new за допомогою функції конструктора створює новий об’єкт
function User (){

    // this = {}; - це відбувається неявно
    this.name = 'Misha';
    this.age = 24;

    // return this - неявно 

};
let firstUser = new User();
console.log(firstUser);




// ми також можемо return щось з User
function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- повертає цей обєкт
}
console.log( new BigUser().name );  // Godzilla, отримале цей обєкт





// якщо в return указати щось інше замість обєкту, то повернеться this
// якщо в return передати масив, повернеться undefined
function SmallUser() {
    this.name = "John";
    return 5; // <-- возвращает this
}
  
console.log( new SmallUser().name );  // John
  


// ================================== getter/setter =====================================


class CoffeeMashine {
    monufacturer = 'Bosch';/* публічне поле */
    _power = 0;
    _waterAmount = 0;/* захищене поле */
    #place = 'Ukraine'; /* приватне поле */

    constructor(power, water){
        this._power = power;
        this._waterAmount = water;
    }

    get showCountry (){
        /* щоб отримати доступ ззовні до приватних полей, ми створюємо аксесор */
        console.log(this.#place);
    }

    get mashinePower(){
        console.log(this._power);
    }

    get waterAmount(){
        console.log(this._waterAmount);
    }

    set waterAmount(amount){
        this._waterAmount = amount
    }

}

let newCoffeMashine = new CoffeeMashine('300w', '3l');
newCoffeMashine.waterAmount = '2L';
newCoffeMashine.waterAmount;

newCoffeMashine.mashinePower = 200;
newCoffeMashine.mashinePower;
// newCoffeMashine.#place  ======>  /* не працює так як це приватна властивість, вона доступна тільки для коду всередині класу */

newCoffeMashine.showCountry; 

/* також якщо ми розширимо клас CoffeMashine, і створимо дочірній клас, то приватна властивість #place НЕ УНАСЛІДУЄТЬСЯ! */





// ==================================classes, constructor=====================================

/* Ключове слово constructor у класах JavaScript використовується визначення методу-конструктора, 
який викликається під час створення нового об'єкта класу з допомогою оператора new. Метод-конструктор
 виконує ініціалізацію об'єкта, встановлює початкові значення властивостей і може приймати аргументи 
 їх передачі під час створення об'єкта. */

class Car{
    type = '4x4' /* новий синтаксис */
    constructor(model){
        /* this.type = '4x4' - можна й так */
        this.model = model;
    }

    showModel(){
        console.log(this.model);
    }
}

let toyota = new Car('toyota');

console.log(toyota);



// Класи також можна розширювати

class Animal2 {

    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} біжить з швидкістю ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} зупинився і стоїть`);
    }



}

// також ми можемо звернутись до методу батьківського класу з дочірнього класу за допомогою super.method().

class Rabbit extends Animal2{

    constructor(name, earLength){
        super(name)/* super потрібно викликати перед this */
        this.name = name;
        this.earLength = earLength;
    }

    hide(){
        console.log(`${this.name} ховається!`);
    }
    stop(){
        super.stop();/* буде викликаний метод з Animal2 */
        this.hide()
    }

}


let rabbit = new Rabbit('Bunny',10);
rabbit.run(5);
rabbit.stop();
console.log(rabbit.earLength);

// ================================== typeof =====================================


/* typeof - це оператор JavaScript, який повертає тип операнда.

Ви можете використовувати оператор типу дляперевірки типу значення змінної або для визначення типу операнда. 
Він може приймати будь-який вираз і повертати одне з наступних значень:

"undefined" – якщо значення не визначено;
"boolean" - якщо значення є логічним;
"number" – якщо значення є числом;
"string" – якщо значення є рядком;
"bigint" - якщо значення є великим цілим числом (доступне із ES2020);
"symbol" – якщо значення є символом (доступно з ES2015);
"Function" - якщо значення є функцією;
"object" - якщо значення є об'єктом (включаючи масиви, але з функції);
"null" - якщо значення null. */

console.log(typeof '2312');






// ================================== instanceof ===================================


/* instanceof - це оператор JavaScript, який дозволяє перевіряти, чи був об'єкт створений 
за допомогою конструктора. Він повертає значення true, якщо об'єкт був створений за 
допомогою вказаного конструктора, і false інакше. */

/* Обычно оператор instanceof просматривает для проверки цепочку прототипов. Но это поведение 
может быть изменено при помощи статического метода Symbol.hasInstance. */

const arrExmp = [];
console.log(arrExmp instanceof Array);
console.log(arrExmp instanceof Object); /* також тру так як масиви також обєкти, тобто був переглянутий цілий ланцюжок прототипів */

const kjgkg = {};
console.dir(kjgkg);



// ================================== prototype ===================================


/* 1. [[Prototype]] - це внутрішня властивість об'єкта JavaScript, що містить посилання на його прототип. Ця властивість 
не доступна безпосередньо, але може бути змінена за допомогою методів Object.setPrototypeOf() або Object.create(). 
[[Prototype]] використовується для пошуку властивостей та методів об'єкта, які не визначені безпосередньо в ньому, а 
успадковані від його прототипу. */



/* 2.__proto__ - це геттер і сеттер для властивості [[Prototype]], який дозволяє отримувати та встановлювати посилання на прототип 
об'єкта. Однак, використання __proto__ не рекомендується, оскільки це застаріла властивість і може бути видалено 
з майбутніх версій JavaScript. */


/* 3. Prototype - це властивість функцій, яка посилається на об'єкт-прототип, який буде використовуватися для створення 
нових екземплярів цієї функції. Він використовується для створення об'єктів за допомогою ключового слова new. Крім того, 
Prototype може використовуватися для створення загальних методів та властивостей для всіх екземплярів функції. */


/* В цілому, [[Prototype]] та __proto__ є внутрішніми механізмами JavaScript, які дозволяють об'єктам успадкувати властивості 
та методи від своїх прототипів. Prototype використовується для створення нових екземплярів функцій і може містити загальні 
властивості і методи для всіх екземплярів, що створюються. */




// в коді нижче кожен раз при виклику оператора new буде створюватись новий екземпляр обєкту, і в КОЖНОМУ екземплярі буде створюватись
// копія функції sayHi
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function (){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const misha = new Person('Misha',16);



/* в цьому коді функція sayHi буде записана в прототипі Animal, тобто при створенні нових екземплярів в них не буде цьої функції. При спробі
виклику з екземпляра ця функція буде взята з ПРОТОТИПУ. Цей метод економить память, адже при створенні нового екземпляра не створюється 
нова функція. */
function Animal(name, age) {
    this.planet = 'Earth';
    this.name = name;
    this.age = age;

}

Animal.prototype.sayHi = function (){
    console.log(`Hello, Im ${this.name} and I am ${this.age} years old.`);
}

const bear = new Animal('Bear',22);


// в цьому коді я створив нового медведя, який прототипом установить його маму
const babyBear = Object.create(bear, {
    small: {
        value: true
    },
    name: {
        value: 'babebear'
    },
    age: {
        value: 2
    }
});
babyBear.sayHi();


// За необхідності можна перевірити чи є в обєкта якийсь прототип

console.log(Object.getPrototypeOf(babyBear));


// також в процесі коду можна змінити прототип на інший, але це не рекомендується, адже це дивно і + це дуже 
// повільна операція

Object.setPrototypeOf(babyBear, {name: 'bird', age:2222})





// ================================== arrow functions ===================================

// this немає в стрілочних функціяї, this наслідується ззовні. Якщо змінити код на function expression то код не спрацює, адже
// forEach за замовчуванням виконує функції з цим, рівним undefined, і в результаті ми намагаємося звернутися до undefined.title.
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList()

// Також в стрілочних функціях немає масиву arguments, методу super і вони не можуть бути викликані з оператором new







// ================================== setTimeout ===================================
// перший аргумент функція, другий затримка, третій аргумент потрібний для функції (може бути будь яка кількість)

function sayHello(name){
    console.log(`hi my friend ${name}`);
}


let timerId =  setTimeout(sayHello, 3000, 'Misha');
/* можна відмінити таймер, для цього його потрібно перед цим записати в змінну, в нашому випадку таймер не відпрацює*/
clearTimeout(timerId);






// ================================== setInterval ===================================
// синтаксис такий самий як в setTimeout, але функція виконується з заданим інтервалом до тих пір, поки не зробимо
// clearInterval

let intervalId = setInterval(sayHello, 1000, 'Ann');

const stopInterval = setTimeout(() => {clearInterval(intervalId)}, 5000);


/* якщо ми щось хочемо повторювати з певним інтервалом, то можна скористатись setInterval (менш точний), а можна створити вкладений
один в одний setInterval (такий спосіб надійніший і дає гарантію що код виконається коли треба) */let delay = 5000;

let timerIdss = setTimeout(function request() {
    /* ...відправити запит... */
  
    if (/* помилка запиту */ true) {
      // збільшити час для наступного запиту
      delay *= 2;
    }
  
    timerId = setTimeout(request, delay);
  
}, delay);

//   Вкладений setTimeout дозволяє встановити затримку між виконаннями більш точно, ніж setInterval.




// ================================== generators \ yield ===================================

/* Генератори можуть породжувати (yield) безліч значень одне одним, за необхідності. Генератори 
відмінно працюють з об'єктами, що перебираються, і дозволяють легко створювати потоки даних. */

function* generateSmth (){
    yield 1;
    yield 2;
    yield 3;
    return 4
};

let generator = generateSmth();
let firstResult = generator.next();
let secondResult = generator.next();
let thirdResult = generator.next();
let finalResult = generator.next();


console.log(generator);
console.log(firstResult);
console.log(secondResult);
console.log(thirdResult);
console.log(finalResult);





// ================================== Promises ===================================

const promise = new Promise((resolve, reject) => {
    console.log(`підготовка данних...`);

    setTimeout(() => {
        const data = {
            name: "Misha",
            surname: "Yevrii",
        };

        resolve(data);
    }, 1500);
});

promise
    .then((data) => {
        return new Promise((resolve, reject) => {
            console.log(`модифікаця data`);

            setTimeout(() => {
                data.sex = "male";
                resolve(data);
            }, 1500);
        });
    })
    .then((data) => {
        return new Promise((resolve, reject) => {
            console.log(`admin ++`);
            setTimeout(() => {
                data.admin = true;
                resolve(data);
            }, 1500);
        });
    })
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log(`finally`);
    })