'use strict'

// В JS Є можливість створення не тільки обробників подій, а й можливість створення подій, схожих на
// вбудовані 'click', 'mousedown' і тп.
/*

__________________________________________________________________________________________
|                                                                                        |
|                                     new Event(type, optionsObj)                        |
|________________________________________________________________________________________| */
let newEvent;
// використовується коли потрібно якусь подію, яка буде схожа на стандартні onclick і тд
// Подію вбудованого класу Event можна реалізувати наступним чином:
// let event = new Event(type, options);

// Аргументи:

    // ==== type         ===>    тип події, рядок. Наприклад: 'my-event', 'menu-clicked';
    // ==== options      ===>    обєкт з трьома не обовязковими властивостями: (за замовчуванням всі false)
                            //  bubbles: true/false ==> якщо true то подія випливає
                            //  cancelable: true/false - якщо true то ми можемо відмінити стандартну поведінку
                            //  composed: true/false - якщо true то подія буде випливати назовні за границі ShadowDOM
//


/*

__________________________________________________________________________________________
|                                                                                        |
|                            element.dispatchEvent(someCreatedEvent)                     |
|________________________________________________________________________________________| */
let dispatchEventt;

// Після того як ми створили івент, ми маємо запустити його на елементі викликом elem.dispatchEvent(event):

const btn =  document.querySelector('#elem');
let someEvent = new Event('btn-click', {bubbles:true, cancelable:true, composed:false});     // створюємо івент
btn.addEventListener('btn-click', (event) => console.log(event));  // додаємо слухача за 'btn-click'
btn.dispatchEvent(someEvent);       // Можемо при будь яких сценаріях викликати діспатч 


// Ми легко можемо перевірити чи це справжня подія, чи подія згенерована кодом. 
let isTrusted;
// якщо подія штучна то event.isTrusted буде false, якщо подія згенерована реальними діями юзера - буде true


// Окрім new Event існують інші специфічні івенти, такі як UIEvent, FocusEvent, MouseEvent, WheelEvent, KeyboardEvent
// В специфічних обєктах в обєкті options можна встановлювати тодаткові властивості, яких не буде в звичайному new Event




/*

__________________________________________________________________________________________
|                                                                                        |
|                            new CustomEvent(eventName, optionsObj)                     |
|________________________________________________________________________________________| */
let newCustomEvent;

// CastomEvent потрібно використовувати коли ми створюємо якийсь івент, не схожий за поведінкою на стандартні
// і коли потрібно до івенту додати якісь додаткові властивості або стан, які будуть корисні в обробниках цих
// подій

// Також в CastomEvent є можливість вказувати додаткову інформацію для передачі в подію. Для цього в optionsObj додаємо
// поле detail:{someDetail:3}

const btn2 =  document.querySelector('#elem2');
let customEvent = new CustomEvent('custom', {bubbles:true, cancelable:true, composed:true, detail:{name:'misha'}});// створюємо івент з details
//                                          властивість composed присутня тільки в CustomEvent
btn2.addEventListener('custom', (event) => console.log(event));  // додаємо слухача за 'custom';
btn2.dispatchEvent(customEvent);       // Можемо при будь яких сценаріях викликати діспатч 



/*

__________________________________________________________________________________________
|                                                                                        |
|                            document.createEvent(type)                                  |
|________________________________________________________________________________________| */
let createEvent;
let initEvent;
// document.createEvent(type) Є устарівшим аналогом new Event і new CustomEvent

const btn3 =  document.querySelector('#elem3');
const depracatedEvent = document.createEvent('CustomEvent');  // створення нового івенту: 'Event' або 'MouseEvent' або 'CustomEvent' і тд

depracatedEvent.initEvent('mega', true, true); // для використання обовязкова ініціалізація. true - це для параметрів bubbles і cancalable. Нема 
                                                // можливості вказати true для composed, адже composed тільки для customEvent
depracatedEvent.customProperty = 'misha';   // в такому записі властивість не додасться в поле detail а просто буде полем обєкта івенту
btn3.addEventListener('mega', (e) => console.log(e))
btn3.dispatchEvent(depracatedEvent);


/*

__________________________________________________________________________________________
|                                                                                        |
|                            new MouseEvent(type, options)                               |
|________________________________________________________________________________________| */
let newMouseEvent;

// Дозволяє створити емуляцію кліка, тобто користувач по факту не клікне, але ми обіграємо так наче клікнув

// Аргументи:
    // type (обовязковий)       ===>     'dblclick', 'mousedown', 'mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup'
    // options (не обовязковий) ===>     обєкт який приймає стандартні bubbles, cancellable і ряд інших, таких як: screenX,
//                                       screenY, clientX ,clientY ,ctrlKey ,shiftKey ,altKey ,metaKey ,button ,buttons ,relatedTarget
const btn4 =  document.querySelector('#elem4');
let mouseEvent = new MouseEvent('click', {bubbles:false, cancelable:true,  clientX: 100,clientY: 200} )
btn4.addEventListener('click', (event) => console.log(event));  
btn4.dispatchEvent(mouseEvent);       



/*

__________________________________________________________________________________________
|                                                                                        |
|                 someWindow.postMessage(message, targetOrigin,transfer )                |
|________________________________________________________________________________________| */
let postMessagee;

// postMessage Використовується для обміну данними між вкладками або вікнами браузеру. Використовує browser API, тому не залежить від інтернету

// Аргументи:
    // message (обовязковий)   ===>    повідомлення, яке буде відправлене, можна передавати не тільки рядки, а й масиви і тп
    // targetOrigin (обовязковий)   ===>    url, куди буде відправлена message. Краще вказувати конкретний url замість '*'
    // transfer (не обовязковий)   ===>    послідовність обєктів які пудуть передані в message ???
//


// Першим ділом, щоб взаємодіяти з новою вкладкою або вікном нам потрібно мати посилання на це вікно або вкладку(targetWindow);

// Відправник
const btn5 = document.querySelector('#elem5');
btn5.addEventListener('click', (event) => {
    const targetWindow = window.open('https://www.example.com', '_blank');   // відкриваємо нову вкладку з сайтом https://www.example.com. В змінній збережеться
    //                                                                          посилання на це вікно/вкладку
    //
    targetWindow.postMessage('Hello', 'https://www.example.com');   // Відправляємо Hello на сайт https://www.example.com, якщо цей сайт не відкритий в іншому вікні
    //                                                                 або вкладці, то це не спрацює.
});  


// Після відправки message, приймаючий бік, ОБОВЯЗКОВО має мати слухач подій, який буде обробляти прийом message. В іншому разі нічого не відбудеться

// Сторона яка приймає

window.addEventListener('message', function(event) {    // слухач за подією message
    if (event.origin === 'https://www.example.com') {   // перевірка на "ліві" повідомлення. Тобто якщо повідомлення прийшло не з цього джерела, то воно буде проігнороване
      console.log('Received message:', event.data);     // обробка отриманого повідомлення
    }
});

/*

__________________________________________________________________________________________
|                                                                                        |
|                                        localStorage                                    |
|________________________________________________________________________________________| */
let localStoragee;
// localStorage дозволяє зберігати данні, які будуть доступні навіть після закриття браузеру
// Данними для localStorage можуть бути ТІЛЬКИ рядки. Тому якщо ми хочемо зберегти якусь складнішу структуру, потрібно
// використовувати методи JSON;

// 1. Додавання данних:

localStorage.setItem('Misha', JSON.stringify({'male':true, age: 24}));
localStorage.setItem('Tina', JSON.stringify({'female':true, age: 23}));

// 2. Отримання данних:

const receiveFromLS =  localStorage.getItem('Misha');  // тут отримаємо просто рядок {"male":true,"age":24}, а нам треба обєкт
const receiveFromLS2 =  JSON.parse(localStorage.getItem('Misha'));  // тут отримаємо обєкт {male: true, age: 24}

// 3. Видалення данних:
localStorage.removeItem('Tina');


// 4. Повна очистка localStorage:

localStorage.clear()



/*

__________________________________________________________________________________________
|                                                                                        |
|                          .addEventListener(type, listener, optionsObj)                 |
|________________________________________________________________________________________| */
let addEventListenerr;

// Аргументи:
    // type         ===>    тип події click, dbclick, mousedown і тп
    // listener     ===>    обєкт який приймає сповіщення коли вказана подія відбулась. Це має бути обєкт який реалізує інтерфейс EventListener 
    //                      або звичайна функція
    // options      ===>    обєкт, який вказує додаткові параметри capture і/або once і/або passive
    //                          ===> capture - (boolean)  вказує що події цього типу будуть відправлені обробнику listener перед відправкою на EventTarget
    //                          ===> once    - (boolean) якщо true то обробник буде негайно видалений після виклику
    //                          ===> passive - (boolean) вказує що обробник ніколи не викличе e.preventDefault();
//



/*

__________________________________________________________________________________________
|                                                                                        |
|                          .removeEventListener(type, listener, optionsObj)                 |
|________________________________________________________________________________________| */
let removeEventListenerr;

// Аргументи:
    // type         ===>    тип події click, dbclick, mousedown і тп
    // listener     ===>    функція яку потрібно видалити(має бути та сама яка використовувалась в addEventListener)
    // options      ===>    обєкт, який вказує додаткові параметри capture і/або once і/або passive
    //                          ===> capture - (boolean)  вказує що події цього типу будуть відправлені обробнику listener перед відправкою на EventTarget
    //                          ===> passive - (boolean) вказує що обробник ніколи не викличе e.preventDefault();
//




newEvent;
dispatchEventt;

newCustomEvent;

createEvent;
initEvent;

newMouseEvent;

postMessagee;

localStoragee;

addEventListenerr;
removeEventListenerr;