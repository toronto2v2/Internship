
const listOfCars = ['Ferrari', 'Pagani', 'Bougatti','Lambargini'];

const carsOptions = {
    localeMatcher: "best fit",              // "lookup" і "best fit"
    style: 'long',                          //  "short" или "narrow", 'long'  якщо вказати narrow то в type обовязково має бути 'unit'
    type: "conjunction",                    //  "disjunction",  "unit", 'conjunction'
}

const formatCarsList = new Intl.ListFormat(locale, carsOptions);
console.log(formatCarsList.format(listOfCars));