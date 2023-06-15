

/*
__________________________________________________________________________________________
|                                                                                        |
|                               Регулярні вирази(regExp)                                 |
|________________________________________________________________________________________| */

// Прапори регулярних виразів:
    let flags;

    // i   ===>    (insensetive)    ---   прапор, який робить регулярку не чутливою до регістру;
    // g   ===>    (global)         ---   прапор, який шукає ВСІ співпадіння;
    // m   ===>    (multi line)     ---   багаторядковий режим; впливає на якорі ^ i $. в такому випадку якорі будуть
    //                                    означати не тільки початок/кінець всього тексту, а й початок/кінець кожного
    //                                    рядку тексту
    // s   ===>    (single line)    ---   режим, в якому крапка . може відповідати символу переносу рядка;
    // u   ===>    (unicode)        ---   вмикає підтримку юнікоду; Потрібно для тиз випадків коли використовуються
    //                                    ієрогліфи та інші нестандартні штуки
    // y   ===>    (sticky)         ---   режим пошуку по конкретній позиції в тексті;
//



// Символьні класи:
    let symbolClasses;
    // /d  (digits)         ===>    тільки числа
    // /D  (non digits)     ===>    будь який символ окрім чисел

    // /s  (space)          ===>    включає в себе символ пробілу, табуляції, перенесення рядка \n і тп
    // /S  (non space)      ===>    будь який символ окрім пробілу, табуляції і тд

    // /w  (word)           ===>    буква ЛАТИНСЬКОГО алфавіту, або цифра, або підкреслення _
    // /W  (non word)       ===>    все окрім латинського алфавіту, цифер, підкреслення _

    // /b  (word boundary)  ===>    Вказує гранцицю слова 

    // .   (крапка)         ===>    крапка означає БУДЬ ЯКИЙ СИМВОЛ(але не його відсутність!!!) окрім нового рядку.
//


// Якорі: початок рядку ^ і кінець рядку $
    let anchors;
    // Якорі вказують на те, що рядок, з яким йде зіставлення регулярки, має строго починатись і/або закінчуватись вказаною
    // конструкцією

    'some mary';
        /^some/     //====>   поверне some, адже на ПОЧАТКУ рядку було знайдено some
        /$mary/     //====>   поверне mary, адже на ВКІНЦІ рядку було знайдено mary
        /^some$/    //====>   поверне null, адже регулярка очікує, що на початку буде some і вкінці some. Шукає повне співпадіння
//


// Набори та діапазони:

    /[aeo]/g        // ===>       (набір)       означає шукати а або е або о
    /[a-z]/g        // ===>       (діапазон)    буде шукати будь яку з букв діапазону від а до z
    /[a-zA-Z0-9]/g  // ===>       (діапазон)    буде шукати будь яку з букв діапазону від а до z, A - Z, 0 - 9
    /[a-zA-Z0-9]/g  // ===>       (діапазон)    буде шукати будь яку з букв діапазону від а до z, A - Z, 0 - 9

    /[^aeb]/g       // ===>       (виключний набір)         виключає вказані значення
    /[^aeb]/g       // ===>       (виключний діапазон)      виключає вказаний діапазон
//



// Кватифікатори '+', '*', '?' і {n}

    /\d{2}/g         /// ===>     шукає числа з довжиною 2. АЛЕ візьме також числа з більшою довжиною і візьме перші два числа, тобто
    //                            '1245' - підійде, але буде взято '12'

    /\d{2,3}/g       /// ===>     шукає числа з довжиною від 2 до 3 включно. Будуть взяти двохчислові співпадіння, а якщо число більше за  
    //                            три числа, то відріжеться перші три

    /\d{2,}/g       /// ===>     шукає числа з довжиною від 2 і до нескінченності

    /\d{,5}/g       /// ===>     ТАК НЕ МОЖНА. ПЕРШИЙ КОЕФІЦІЄНТ ПОТРІБНО ВКАЗУВАТИ


    /\d+/g          /// ===>     "+" означає один і більше, те саме що й {1,}
    /colou?r/g      /// ===>     "?" означає нуль або один. Тобто підійде color i colour. Аналог {0,1}
    /colou*r/g      /// ===>     "*" означає нуль або більше, тобто підійде: colour, colouuuuur, colouuuuuuuuuur і тд і тп. Аналог {0,}
    
//


// Жадні і ліниві квантифікатори

    // ЩОБ ВВІМКНУТИ ЛІНИВИЙ РЕЖИМ, ПЕРЕД БУДЬ ЯКИМ КВАНТИФІКАТОРОМ ПОТРІБНО НАПИСАТИ ЗНАК ПИТАННЯ ?

    // Зазвичай, двигун регулярних виразів працює в "жадному" режимі. 
    const somestr = '<a href="/"> <input type="radio" checked> <b>.....';

    // Якщо в прикладі вище ми спробуємо знайти всі теги, то скоріш за все ми напишемо таку регулярку:
    /<.*>/g     //  ===> тут ми кажемо що будемо шукати знак < , потім нуль або безліч будь яких символів, і знак >
    //                   В безліч символів попадає ввесь рядок 'a href="/"> <input type="radio" checked> <b' до цього знаку >
    //                   В результаті отримаємо <a href="/"> <input type="radio" checked> <b>. Квантифікатор зірочки *
    //                   відпрацював в жадному режимі і зхавав все що йшло до знаку > 

    /<.*?>/g    /// ===> В цьому випадку двигун перевіряє наявність знаку > на кожному символі співпадіння. В такому випадку 
    //                   повернеться правильний результат.

//



// Дужкові групи    (...)

    // дужкові групи нумеруються зліва направо
    
    // Частину шаблону можна помістити в дужки. У такого виділення два ефекти:
        // 1. Дозволяє помістити чатину співпадіння в окремий масив
        // 2. Якщо встановити квантифікатор після дужок, то він буде застосований до всьої конструкції, а не тільки до певного символа
    //


    // Дужкові групи можна іменувати. Таким чином зручно буде до них звертатись. Синтаксис надання імя дужковій групі наступний:
    /(?<someName>[0-9])/gi

    // Якщо дужкові групи нам потрібні тільки для обєднання якогось виразу, а виносити їх в окремий результат ми не хочемо, то можна
    // виключити їх з запамятовування:
    
    /(?:[a-g]+)/    



    // Якщо ми використовуэмо str.replace() то по дужковим групам можна звертатись $1 (перша група),$2 (друга група), $name (група name)
//


// Зворотні посилання в шаблоні: \N і \k<name>

    /(['"]).*?\1/gi    // /1 означає що ми посилаємось на першу дужкову групу. /1 каже - те саме що й в першій дужковій групі

    /(?<name>['"]).*?\k<name>/gi    // \k<name> означає що ми посилаємось на іменовану дужкову групу. \k<name> каже - те 
    //                                  саме що й в групі name

//


// Випереджальні та ретроспективні перевірки
    
    // Випереджальна перевірка:
    /apple(?= pie)/     // знайде apple після якого одразу йде pie
    /apple(?! pie)/     // знайде apple тільки якщо після нього нема pie

    // Ретроспективна перевірка:
    /(?<=green )apple/  // знайде apple тільки якщо перед ним йде green i пробіл
    /(?<!green )apple/  // знайде apple якщо перед ним не green i пробіл



// Також в регулярних виразів є свої методи:

// RegExp.prototype.test(str)
// Виконує пошук зпівпадіння регулярного виразу з вказаним рядком. Повертає true | false;
console.log(/\d+/gi.test('Misha is 24'));      //    ====>   Перевірить чи є в рядку числа і поверне true | false;


// RegExp.prototype.exec(str)
// Виконує пошук зпівпадіння регулярного виразу з вказаним рядком. Але повертає масив з результатом або null.
// з прапором g зіставлення відбувається поетапно. Після кожного етапу lastIndex регулярного виразу змінюється
const execStr = 'Misha 26 is 24';
const execRegExp = /\d+/ig;                 // Спочатку lastIndex = 0, потім 8, потім 14
console.log(execRegExp.exec(execStr));      // [ '26', index: 6, input: 'Misha 26 is 24', groups: undefined ]
console.log(execRegExp.exec(execStr));      // [ '24', index: 12, input: 'Misha 26 is 24', groups: undefined ]
console.log(execRegExp.exec(execStr));      // null
