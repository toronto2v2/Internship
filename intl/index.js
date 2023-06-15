/*
__________________________________________________________________________________________
|                                                                                        |
|                    new Intl.DateTimeFormat(locales, optionsObj)                        |
|________________________________________________________________________________________| */
let DateTimeFormat;
// Дозволяє вивести дату, час в форматі, який використовується в певній країні

const dateNow = new Date();
const dateOptions = {
    weekday: 'long',                //  "narrow", "short"
    year: 'numeric',                //  "numeric" i "2-digit"
    month: 'short',                 //  "numeric", "2-digit", "narrow", i "long"
    era: 'short',                    //  "narrow", "short" и "long"
    day: 'numeric',                 //  "numeric" i "2-digit"
    minute: 'numeric',              //  "numeric" i "2-digit"
    hour: 'numeric',                //  "numeric" i "2-digit"
    second: 'numeric',              //  "numeric" i "2-digit"
    timeZoneName: 'short',          //  "short" i "long"
    // hour12: 'true',
    // formatMatcher: 'best fit',
    // localeMatcher: 'lookup'
}
let formatedDate = new Intl.DateTimeFormat('ua-UA', dateOptions);

// замість того щоб явно вказувати локаль (тут 'ua-UA'), ми можемо брати локаль з браузера користувача наступним
// чином:

// const locale = navigator.language;          // працює тільки в браузері
// formatedDate = new Intl.DateTimeFormat(locale, dateOptions);

console.log(formatedDate.format(dateNow));       // воскресенье, 28 мая 2023 г. от Рождества Христова, 22:03:52 GMT+3 ru-RU
 








/*
__________________________________________________________________________________________
|                                                                                        |
|                      new Intl.NumberFormat(locales, optionsObj)                        |
|________________________________________________________________________________________| */

// Логіка така сама як в Intl.DateTimeFormat, але використовується для форматування чисел в
// вісотк, валюту і тп


const numForFormat = 54544.36412;

const numOptions = {
    localeMatcher:"best fit",           //  "lookup" и "best fit"
    style: 'decimal',                  //  'decimal' i 'percent', 'currency'
    currency: 'UAH',                    //  якщо присутній style: 'currency', то ця властивість обовязкова
    currencyDisplay: 'symbol',            //  'symbol', 'code'
    useGrouping: true,
    //    або ця група
    //minimumIntegerDigits:             // мін кількість цифр цілої частини числа. Значення: від 1 до 21
    //minimumFractionDigits:            // мін кількість цифр дробної частини числа. Значення: від 0 до 20. Якщо style:'percent' то = 0
    //maximumFractionDigits:            // макс кількість цифр дробної частини числа. Значення: від 0 до 20
    // або ця група
    //minimumSignificantDigits: 11      // мін кількість значащих цифр числа. Значення: від 1 до 21 ---- значащі це всі числа, 
                                      // якшо менше кількості цифр то нічого не робит, якщо більше додає нулі. Округляє
    //                                  
    //maximumSignificantDigits:        // макс кількість значащих цифр числа. Значення: від 1 до 21. ---- значащі це всі числа, 
                                       // якщо менше кількості цифр, то обрізає і заокруглює, якщо більше то нічого не робить
    //
}

const formatNum = new Intl.NumberFormat('ua-UA', numOptions);

const formatedNum = formatNum.format(numForFormat)
console.log(formatedNum);
formatedNum;            //  54 544,32 UAH




/*
__________________________________________________________________________________________
|                                                                                        |
|                        new Intl.listFormat(locales, optionsObj)                        |
|________________________________________________________________________________________| */


// Дозволяє форматувати списки


const listOfCars = ['Ferrari', 'Pagani', 'Bougatti','Lambargini', 'Audi'];

const carsOptions = {
    localeMatcher: "best fit",              // "lookup" і "best fit"
    style: 'long',                          //  "short" или "narrow", 'long'  якщо вказати narrow то в type обовязково має бути 'unit'
    type: "conjunction",                    //  "disjunction",  "unit", 'conjunction'
}

const formatCarsList = new Intl.ListFormat('en-GB', carsOptions);
console.log(`LIST: ${formatCarsList.format(listOfCars)}`);







/*
__________________________________________________________________________________________
|                                                                                        |
|                     new Intl.RelativeTimeFormat(locales, optionsObj)                   |
|________________________________________________________________________________________| */

// дозволяє форматувати дату відносно вказаного періоду часу


const relTimeFormatOptions = {
    localeMatcher: "best fit",                  // other values: "lookup" ,  "best fit"
    numeric: "always",                          // other values: "auto" ,   "always"
    style: "long",                              // other values: "short" or "narrow" , "long"
}



const formatRelativeTime = new Intl.RelativeTimeFormat('ua-UA', relTimeFormatOptions);
//format приймає два аргументи:  значення часу та одиниці виміру
console.log(`RELATIVE_TIME_FORMAT: ${formatRelativeTime.format('1', 'year')}`);  // через 1 рік
console.log(`RELATIVE_TIME_FORMAT: ${formatRelativeTime.format('-1', 'quarter')}`);  // 1 квартал назад





// formatRange(startDate, endDate)      ===>    Використовується для вказання проміжку часу // Expected output: "1/10/07 – 1/10/08"
//formatRangeToParts(startDate, endDate)===>    повертає масив обєктів з кожним елементом відформатованої дати
                                                // Expected output (in GMT timezone):
                                                // Object { type: "hour", value: "2", source: "startRange" }
                                                // Object { type: "literal", value: ":", source: "startRange" }
                                                // Object { type: "minute", value: "00", source: "startRange" }
                                                // Object { type: "literal", value: " – ", source: "shared" }
                                                // Object { type: "hour", value: "3", source: "endRange" }
                                                // Object { type: "literal", value: ":", source: "endRange" }
                                                // Object { type: "minute", value: "00", source: "endRange" }
                                                // Object { type: "literal", value: " ", source: "shared" }
                                                // Object { type: "dayPeriod", value: "AM", source: "shared" }
// formatToParts(date)                  ===>    повертає масив з обєктами в яких описується елемент дати та його value
// resolvedOptions()                    ===>    дозволяє отримати ті options які ми передали в Intl