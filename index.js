
// Date.prototype.valueOf = () => {
//     console.log(`called valueof`);
//     return `okokok`
// };

// Date.prototype.toString = () => {
//     console.log(`called to string`);
//     return `blabla`
// };

// const date = new Date('2022-12-20');
// const date2 = new Date();
// console.log(date2 + date);

// const text = 'We bought 5 dedicated servers and provide them to our 3 new devops.';


// const getAlphaBet = () => {

//     for (let letter = 'a'; letter <= 'z';  letter = String.fromCharCode(letter.charCodeAt()+1)) {
//       console.log(letter)
//     }


// };
// getAlphaBet()



// function extractNumbersWithoutRegExp(str) {

//     const res = [];
//     for (const char of str){
//         if(!isNaN(char) && char !== " "){
//             res.push(+char)
//         }
//     }
//     return res
// }

// extractNumbersWithoutRegExp(text);




// function extractNumbersWithoutRegExp2(str) {
//     const res = [];
//     for (const char of str){
//         if(char >= '0' && char <= '9'){
//             res.push(+char)
//         }
//     }
//     return res
// }
// const serversAndDevOps =  extractNumbersWithoutRegExp2(text);


// console.time(`firstDev`);
const spreadServersBeetwenDevops = ([servers, devOps]) => {
    const res = {};
    const mid = Math.round(servers/devOps);

    let serversNum = servers;

    for( let i = 1; i <= devOps; i++) {
        if( serversNum >= mid ){
            res[`devOps-${i}`] = mid;
            serversNum -=  mid;
        }else{
            res[`devOps-${i}`] = serversNum
        }
    }
    return res
}

// console.log(spreadServersBeetwenDevops([12, 5]));
// console.timeEnd(`firstDev`);


// console.time(`secondDev`);

const spreadServersBeetwenDevops2 = ([servers, devOps]) => {
    const res = {};
    let setversQuant = servers;
    
    for(let i = 1; i <= devOps; i++){
        res[`devOps-${i}`] = 0;
    }
    for(let i = 1; i <= setversQuant; i++){
        ++res[`devOps-${i}`] 
        if(res[`devOps-${devOps}`] === res[`devOps-${i}`]){
            setversQuant -= i;
            i = 0;
        }
    }

    return res
}

// console.log(spreadServersBeetwenDevops2([12, 5]));
// console.timeEnd(`secondDev`);



// const spreadServersBeetwenDevops3 = ([servers, devOps]) => {
//     const res = {};

//     for(let i = 1; i <= servers; i++){

        

//     }
// }

// console.log(spreadServersBeetwenDevops3([13, 5]));

// expected result { 'devOps-1': 2, 'devOps-2': 2, 'devOps-3': 1 }





// const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let mask = '(xxx) xxx-xxxx';

// function createPhoneNumber(numbers, mask) {

//     let i = 0;    
//     return mask.replaceAll('x', () => {
//         return numbers[i++]
//     })

// }
// console.log(createPhoneNumber(arrOfNumbers, mask));

// ======================================================================================





const text = 'Hello my name is misha i live in Ukraine';

function includes(mainString, str) {
    const mainLength = mainString.length;
    const subLength = str.length;
    
    // Обрабатываем случай, когда длина подстроки больше основной строки
    if (subLength > mainLength) {
      return false;
    }
    
    // Итерируем по основной строке с помощью цикла
    for (let i = 0; i <= mainLength - subLength; i++) {
      let match = true;
      
      // Проверяем совпадение символов подстроки и основной строки
      for (let j = 0; j < subLength; j++) {
        if (mainString[i + j] !== str[j]) {
          match = false;
          break;
        }
      }
      
      // Если все символы подстроки совпадают, возвращаем true
      if (match) {
        return true;
      }
    }
    
    // Если не найдено совпадений, возвращаем false
    return false;
  };

// console.log(includes(text, " is misa"));



// const message = 'Misha has deposit 1509.32 dollar usd.';



// function takeNum (str){
//     let newStr = '';

//     for (const char of str ){
//         const charCode = char.charCodeAt(0);
//         if( (charCode > 47 && charCode < 58) ||  charCode === 46 ){
//             newStr += char
//         }else if ( newStr.length ){
//             break;
//         }

//     }

//     return +newStr
// }



// console.log(takeNum(message));





// зашифроване повідомлення
const input = [
    [33,100,110],[97,115,117],[111,104,84],[110,101,84],[32,111,116],[32,101,109],[111,99,108],[101,87]
];
  
function decryptMessage(data) {
const input = data.flat(1);

let str = '';

for(let i = input.length -1; i >= 0 ; i--){
    str += String.fromCharCode(input[i])
}
return str
}
  
// console.log(
//     decryptMessage(input),
// );




const text1 = 'Mike received $159,34, good job man. Lisa received $95,59 but Kate received $140,12-winner. Platform deposit $950,81 was made at the beginning of March. How much money is left on the platform?';

// expected result
// 950.81 - 140.12 - 95.59 - 159.34 = 555.76

// Выполнить задачу с помощью цикла for
// Запрещено использовать for внутри for
// Запрещено использовать метод .split
// Запрещено использовать любые регулярные выражения (RegExp)
// Запрещены рекурсии

function countPlatformBalance(message) {

    let numbers = '';
    let deposit = undefined;

    for(let i = message.length -1; i >= 0; i-- ){

        const charCode = message[i].charCodeAt(0);

        if(charCode > 47 &&  charCode < 58){
            numbers = message[i] + numbers;

        }else if(charCode === 44 ){

            numbers = '.' + numbers

        }else if(numbers.length){
            
            const parsed = Number.parseFloat(numbers);
            deposit = deposit ? deposit - parsed : parsed;
            numbers = '';

        }

    }

    return +deposit.toFixed(2)

}

console.log(
   countPlatformBalance(text1),
);






const list = `potato:3.5 tomato:2.5 onion:3 water:5 milk:3.3 soda:4.2 ketchup:1 mayo:1.7 sourcream:10`;

const groups = {
    vegetables: [`potato`, `tomato`, `onion`],
    liquid: [`water`, `milk`, `soda`],
    souce: [`ketchup`, `mayo`, `sourcream`],
};

function whatToBuy(list, group) {
    const resultedObj = {};
    let minPrice = Infinity;
    let cheapestItem = "";
    
    for (let category in group) {
        group[category].forEach((item) => {
            const regExp = new RegExp(`${item}:(\\d+?.\\d*)`);
            const match = list.match(regExp);
            if (match) {
                if (+match[1] < minPrice) {
                    minPrice = +match[1];
                    cheapestItem = item;
                }
            }
        });
        resultedObj[cheapestItem] = minPrice;
        minPrice = Infinity;
        cheapestItem = "";
    }
    return resultedObj;
}

console.log(whatToBuy(list, groups));













function findPercent(str) {
    const strWithOutSpaces = str.replaceAll(" ", "").toLowerCase();
    const lettersObj = {};

    function helper(inp, by = strWithOutSpaces.length) {
        return Math.round((inp * 100) / by);
    }

    for (let k of strWithOutSpaces) {
        if (!lettersObj[`letter '${k}'`]) {
            lettersObj[`letter '${k}'`] = 1;
        } else {
            lettersObj[`letter '${k}'`]++;
        }
    }
    return   Object.fromEntries(
             Object.entries(lettersObj)
             .map((it) => [it[0], `${helper(it[1])} %`])
    );
}
console.log(findPercent('Glorious spirit of Ukraine shines and lives forever'));











const MORSE_LETTERS= {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',

}


const decodeMorse = function(morseStr){
    return morseStr.split('   ')
                    .map(item =>  item.replaceAll(/[.-]+ ?/gm, (match) => MORSE_LETTERS[match.trim()]))
                    .join(' ')
}
console.log(decodeMorse('-- -.--   -. .- -- .   .. ...   -- .. ... .... .-'));










function modifyPrices(obj, requestedAmount) {
    return Object.keys(obj).reduce(
        (acc, next, i, arr) => {
            acc.LEFT === 0
                ? (acc.LEFT = requestedAmount * arr.length - obj[next])
                : (acc.LEFT -= obj[next]);
            acc.TOTAL_COLLECTED += obj[next];

            if (i + 1 === arr.length) {
                acc.TOTAL_COLLECTED = `${acc.TOTAL_COLLECTED}$`;
                acc.LEFT = `${acc.LEFT}$`;
            }

            if (next !== `TOTAL_AMOUNT` || next !== `LEFT`) {
                acc[next] = {
                    collected: `${obj[next]}$`,
                    left: `${requestedAmount - obj[next]}$`,
                };
            }

            return acc;
        },
        { TOTAL_COLLECTED: 0, LEFT: 0 }
    );
}

console.log(
    modifyPrices(
        { anna: 5, misha: 10, tina: 13, kolya: 3, andrew: 16, sanya: 1 },
        100
    )
);








function playGame(playerChoice) {
    const choices = ["stone", "paper", "scissors"];
    const logic = {
        stone: `scissors`,
        paper: `stone`,
        scissors: "paper",
    };

    function randomizer() {
        return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }

    const computerChoice = choices[randomizer()];

    if (playerChoice === computerChoice) {
        return `God sake, nobody won`;
    } else if (logic[playerChoice] === computerChoice) {
        return `HUMAN'S ${playerChoice} wins against computer ${computerChoice}`;
    } else {
        return `COMPUTER'S ${computerChoice} wins against human’s  ${playerChoice}`;
    }
}

console.log(playGame("stone"));









function sortData (dataArr){

    const res = dataArr.reduce((acc, next) => {
        if(Array.isArray(next)){
            acc.array ? acc.array = [...acc.array, next] : acc.array = [next];
        }else if(Number.isNaN(next)){
            acc.NaN ? acc.NaN = [...acc.NaN, next] : acc.NaN = [next];
        }else if(next === null){
            acc.null ? acc.null = [...acc.null, next] : acc.null = [next];
        }else{
            acc[typeof next] ? acc[typeof next] = [...acc[typeof next], next] : acc[typeof next] = [next];
        }

        return acc
    },{})

    console.log(res);
}

sortData([146,1246, 'misha', undefined,{bar:'foo'}, Symbol('123'), 'tina', ['foo', 'bar'], 224,135n, true, null,false, {foo:'bar'}, [1,23,'sress'], NaN, undefined, 2, NaN, null]);











const usersTimings = [
    
    {user: 'Misha', timeStart:'0:00'},
    {user: 'Tina', timeStart: '1:15'},
    {user: 'Ann', timeStart: '2:50'},
    {user: 'Mark', timeStart: '4:40'},
    {user: 'Olya', timeStart: '5:35'}
]
function calcTimings (usersArr ,videoLength) {

    return usersArr.reduce((acc, next, i, arr) => {
        if (!arr[i+1]){
            acc.push({...next, timeEnd: `${videoLength}`})
        } else{
            acc.push({...next, timeEnd: `${arr[i+1].timeStart}`})

        }

        return acc
    }, [])


}

console.log(calcTimings(usersTimings, '6:30'));









function badminton (games, p1, p2) {
    const matches = [...games.matchAll(/(\d+):(\d+)/g)].reduce((acc, next) => {
        acc[p1] += +next[1];
        acc[p2] += +next[2];
        return acc
    },{[p1]:0, [p2]:0})

    if(matches[p1] === matches[p2]){
        return `The game between ${p1} and ${p2} ended in a draw`
    }else if( matches[p1] >  matches[p2]){
        return `${p1} won the game against ${p2} with score [ ${matches[p1]}:${matches[p2]} ]`
    }else{
        return `${p2} won the game against ${p1} with score [ ${matches[p2]}:${matches[p1]} ]`
    }

}

console.log(badminton(`[1:2] [3:2] [1:0] [3:5] [5:3]`, 'Misha', 'Tina'));






function countDistance(observerHeight,observedObject) {
    const k = 2.1;
    const milesToKm = 1.61;
    if(countDistance.arguments.length < 2){
        return ((k * Math.sqrt(observerHeight) ) * milesToKm).toFixed();
    }else{
        return (((k * Math.sqrt(observerHeight) ) + (k * Math.sqrt(observedObject))) * milesToKm).toFixed();
    }


}

console.log(countDistance(1.75));





function exposition (itemsArr) {
    const forOrder = new Set();
    itemsArr.forEach( item => forOrder.add(...item.request))
    return forOrder
}

console.log(exposition([
    { name: "Misha", request: ["greece salad", 'soup'] },
    { name: "Tina", request: ["fruits", 'baked potato', 'juice'] },
    { name: "Ann", request: ['soup', 'fruits','fish'] },
    { name: "Olya", request: ["cake"] },
    { name: "Mark", request: ["nuggets", 'fruits'] },
    { name: "Kolya", request: ["souce", 'juice'] },
    { name: "Sanya", request: ["coconut"] },
]));




function debounce ( func, delay){
    let timer;

    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {func(...args)}, delay)
    }

}

function sayHi (name){
    console.log(`hi ${name}`);
}

const newFunc = debounce(sayHi, 500 );
newFunc('Misha')
newFunc('Tina')
newFunc('Ann')
newFunc('Olya')
newFunc('Katya')
newFunc('Grisha')





const square = `First accomodation is 3m length and 5metres width. Height is 3 metres.But height is not important for us.
                Kitchen is 6metres width and 4metres length. Bathroom 2metres length, 3metres width and 3 metres height. Count total square metres.`
//
function countSquareMetres (str){

    let V1;
    let V2;
    let squares = 0;

    for(let i = 0; i< str.length; i++){
        const charCode = str[i].charCodeAt(0);
        const isNum = charCode > 47 && charCode < 58;

        if(isNum && str[i+1] === 'm' && !V1){
            V1 = Number.parseInt(str[i])
        }else if(isNum && str[i+1] === 'm' && !V2){
            V2 = Number.parseInt(str[i])
        }else if(V1 && V2){
            squares+= V1 * V2;
            V1 = undefined;
            V2 = undefined;
        }
    }


    return `The area of all rooms is equal to ${squares} square meters`

}

console.log(countSquareMetres(square));


const findedFruits = `Our supplier uses TONN as the unit of measure. Yesterday he brought the following fruits - apples:50, pineapples:90, peaches:25, strawberries:150. Convert to KG`;

const countTotalFruits = (str) => {
    let k = 0.001;

    let match = '';
    let totalCount;
    let supplierUnit = '';
    let requiredUnit = str.endsWith('KG') ? 'KG': 'TONN';


    for(let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt(0);

        if((match === 'KG' || match === 'TONN') && !supplierUnit){
            supplierUnit = match;
        }

        if(charCode > 47 &&  charCode < 58 && supplierUnit){
            match += str[i];
        }else if(charCode === 32){
            match = '';
        }else if(!supplierUnit){
            match += str[i];
        }else if(supplierUnit && match.length){
            const parsed = Number.parseInt(match);
            totalCount = totalCount ? totalCount + parsed : parsed;
            match = '';
        }

        
    }
    
    if(supplierUnit === 'KG' && requiredUnit === 'TONN'){
        return `${(totalCount * k)} ${requiredUnit}`
    }else if (supplierUnit === 'TONN' && requiredUnit === 'KG'){
        return `${totalCount / k} ${requiredUnit}`
    }else{
        return `${totalCount} ${requiredUnit}`
    }



}

console.log(countTotalFruits(findedFruits));



const nickStr = 'sanya like+bananas so(much';

const convertToCamelCase = (str) => {

    let converted = '';

    for(let i = 0; i < str.length; i++){
        const charCode = str[i].charCodeAt(0);
        const dividerStatus = 
              (charCode > 31 && charCode < 48) ||
              (charCode > 57 && charCode < 65) ||
              (charCode > 90 && charCode < 97)


        if( dividerStatus){
            converted+= str[i+1].toUpperCase();
            i = i+1;
        }else{
            converted+=str[i]
        }
    }

    return converted
};

console.log(convertToCamelCase(nickStr));





const addStar = (str) => {

    let res = '';

    for(let i = 0; i < str.length; i++) {
        if(!res) {res += str [i]; continue}
        const prev = Number.parseInt(str[i - 1]);
        const current = Number.parseInt(str[i]);

        if(prev % 2 !== 0 && current % 2 !== 0){
            res += '*' + current
        }else{
            res += str[i]
        }

    }

    return res
}
console.log(addStar ('1111111111'));




const codeString = (str) => {

    const arr = [];

    for(let i = 0; i < str.length; i++){
        arr.push(str[i].charCodeAt(0).toString(2))
    }
    return arr.join(' ');
}


codeString(`How did you decipher this string?`);




const coveredStr = '1001000 1101111 1110111 100000 1100100 1101001 1100100 100000 1111001 1101111 1110101 100000 1100100 1100101 1100011 1101001 1110000 1101000 1100101 1110010 100000 1110100 1101000 1101001 1110011 100000 1110011 1110100 1110010 1101001 1101110 1100111 111111'


const fromCodeToStr = (str) => {
    const splittedArr = str.split(' ');
    let newStr = ''
    for(let i = 0; i < splittedArr.length; i++){
        newStr += String.fromCharCode(parseInt(splittedArr[i], 2))

    }
    return newStr
}

console.log(fromCodeToStr(coveredStr));




const stickTwoStrings1 = (str1,str2) => {
    if(str1 === str2) return str1
    let res ;
    const lastChar = str1.charCodeAt(str1.length-1);
    for(let i = 0; i < str2.length; i++){
        const charCode = str2[i].charCodeAt(0)
        if((charCode  ===  lastChar) && !res){
            res = str1
        }else if(res){
            res +=str2[i]

        }
    }
    return res
}
console.log(stickTwoStrings1('abaabaab2', 'aa2baabab'));





function stickTwoStrings2(first, second){

   return first + second.slice(second.indexOf(first.at(-1))+1);
    
}

console.log(  stickTwoStrings2('abaabaab2', 'aa2baabab'));






const findPresents = (str, times,serched) => {

    let sliced;
    for(let i = 0; i < str.length; i++ ){
        if(str[i] === serched){
            sliced = str.slice(i, i + times)
            break
        }

    }
    return   sliced.startsWith(``.padStart(times, serched));
}


console.log(findPresents('asgdoooofervdooodgft', 4, 'o'));






const transformStrToArr= (str) => {
    const arr = [];
    let i = 0;
    for(let letter of str){
        const charCode = letter.charCodeAt(0);
        arr.push({
            [`${charCode}`]: letter,
            order: i++
        })
    }
    return arr.sort(() => Math.floor(Math.random() * (1 - -1 + 1) + -1));
}

transformStrToArr('Return an array')



const arrFortransformBackToString = [
    { '121': 'y', order: 14 },
    { '116': 't', order: 2 },
    { '110': 'n', order: 8 },
    { '101': 'e', order: 1 },
    { '117': 'u', order: 3 },
    { '114': 'r', order: 11 },
    { '32': ' ', order: 9 },
    { '82': 'R', order: 0 },
    { '114': 'r', order: 4 },
    { '97': 'a', order: 10 },
    { '97': 'a', order: 7 },
    { '110': 'n', order: 5 },
    { '32': ' ', order: 6 },
    { '97': 'a', order: 13 },
    { '114': 'r', order: 12 }
]

const transformBackToString = (arr) => {
    const sorted = arr.toSorted((a,b) => a.order - b.order);
    return sorted.reduce((acc, next) => {
        const key = Object.keys(next);
        acc += String.fromCharCode(key[0])
        return acc
    }, '')

}
console.log(transformBackToString(arrFortransformBackToString));



const makeTiers = (str) => {
    let res = ''
    for(let i = 0; i < str.length; i++){

        // res += str.slice(0, i + 1 ) + ' ';

        for(let j = 0; j <= i; j++ ){
            res += str[j] 
        }
        res += ' ';
    }
    return `<${str}> Tiers are: ${res}`
}

console.log(makeTiers('420'));






// =========================================================================================================================


function isPangram(string){
    
    const lowerd = string.toLowerCase()

    for(let i = 'a'; i <= 'z'; i = String.fromCharCode(i.charCodeAt(0)+1)){
        if (!lowerd.includes(i)){
            return false
        }
    }

    return true
}

console.log(isPangram('This is not a pangram.'));



function findUniq(arr) {

    return arr.filter((item, i,arr) => arr.indexOf(item) === arr.lastIndexOf(item))[0]

}

console.log(findUniq([   0, 0, 1]));



function solution(str){

    const arr = [];
    for(let i = 0; i < str.length; i= i+2){
        let res = '';
        for(let j = i; j < i+2; j++){
            if(str[j] === undefined){res += '_'; break}
            res += str[j];
        }

        arr.push(res)
    }

    return arr;
}   

solution('abcdef')



function sortArray(array) {
    const originalArr = [...array];
    const removed = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            removed.push(array[i])
            delete originalArr[i];

        }
    }

    removed.sort((a,b) => a-b)
    let iterator = 0;
    for(let i = 0; i< originalArr.length; i++){
        if(originalArr[i] === undefined){
            originalArr[i] = removed[iterator];
            iterator++
        }
    }

    return originalArr
}


console.log(sortArray([5, 3, 1, 8, 0]));




function findMissingLetter(array){

    let found ;
    const res = array.reduce((acc,next) => {
        const charCodeAcc = acc.charCodeAt(0);
        const charCodeNext = next.charCodeAt(0);

        if(charCodeAcc !== charCodeNext - 1 && !found){
            found = String.fromCharCode(charCodeNext - 1);
        }
        
        return acc= next
    })
    return found
}


console.log(findMissingLetter(['O','Q','R','S']));



function towerBuilder(nFloors) {
    let strFloor = [];


    for( let i = 1; i <= nFloors; i++){
        let str = '';
        for(let j = 1; j <= i*2-1; j++){
            str += '*'
        }
        for(let k = 1; k <=nFloors-i; k++){
            str = ' ' + str
        }
        for(let l = 1; l <=nFloors-i; l++){
            str = str + ' '
        }

        strFloor.push(`${str}`)

    }

    return strFloor

}


towerBuilder(10)



function wordsToHex(words) {

    const splittedArr = words.split(' ');
    const resArr = [];

    for(let i = 0; i < splittedArr.length; i++){
        let str = '#';
        for(let j = 0; j < 3; j++){
            if(!splittedArr[i][j]) break
            const charCode = splittedArr[i][j].charCodeAt(0).toString(16);
            str+= charCode
        }

        str = str.padEnd(7, '0');
        resArr.push(str);
    }

    return resArr
}


wordsToHex("Hello, my name is Gary and I like cheese.");



const inData = 'user.name.firstName=Bob&user.name.lastName=Smith&user.favouriteColor=Light Blue&experiments.theme=dark';

const makeObjFromUrl = (url) => {
    const resObj = {}
    const splited = url.split('&').map(item => item.split('='));

    splited.forEach((item,i) => {
        let currentObj = resObj;
        const route = item[0].split('.');
    
        route.forEach( path => {
            if(!currentObj[path] && path !== route.at(-1)){
                currentObj[path] = {};
                currentObj = currentObj[path];
            }else if(path === route.at(-1)){
                currentObj[path] = item[1]
            }
        })
    })
    console.log(resObj);
}

makeObjFromUrl(inData);







function high(x){

    const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };
    
    const points = {};

    x.split(' ').forEach((item,i) => {
        let score = 0;
        for(let l of item){
            score += alphabet[l];
        }

        points[item] = score;

    }) 
    
    
    return Object.entries(points).sort((a,b) => b[1] - a[1])[0][0];
}


high('d bb');






function deleteNth(arr,n){
    
    const obj = {};
    const arrRes = []
    for(let i = 0; i < arr.length; i++){

        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
            arrRes.push(arr[i]);
        }else if(obj[arr[i]] && obj[arr[i]] < n){
            obj[arr[i]] += 1;
            arrRes.push(arr[i]);
        }else{
            continue;
        }

    }

    return arrRes;
    
}

deleteNth([1,1,3,3,7,2,2,2,2], 3)





function countSmileys(arr) {

    const str = arr.join(' ');
    return [...str.matchAll(/[:|;][~-]?[)|D]/mg)].length || 0;





}

console.log(countSmileys([":-)" , ";~D" , ":-D" , ":_D"]));





function dirReduc(arr){

    const LOGIC = {
        NORTH:'SOUTH',
        SOUTH:'NORTH',
        WEST:"EAST",
        EAST:"WEST"
    };
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === LOGIC[arr[i+1]]){
            arr.splice(i, 2);
            i = -1
        }
    }

    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));




function zero(func) {
    const num = 0
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function one(func) {
    const num = 1
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function two(func) {
    const num = 2
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function three(func) {
    const num = 3
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function four(func) {
    const num = 4
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function five(func) {
    const num = 5
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function six(func) {
    const num = 6
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function seven(func) {
    const num = 7
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function eight(func) {
    const num = 8
    if(!func){
        return num
    }else{
        return func(num)
    }
}
function nine(func) {
    const num = 9
    if(!func){
        return num
    }else{
        return func(num)
    }
}

function plus(n) {
    const operated = n;
    return (a) => a + operated
}
function minus(n) {
    const operated = n;
    return (a) => a - operated
}
function times(n) {
    const operated = n;
    return (a) => a * operated
}
function dividedBy(n) {
    const operated = n;
    return (a) => Math.floor(a / operated)
}


console.log(seven(times(five())));




function rot13(message){
    let resStr = '';
    for(let l of message){
        let charCode = l.charCodeAt(0);

        if(charCode > 64 && charCode < 91){
            if(charCode + 13 > 90){
                charCode = ((charCode + 13) % 90) + 64;
            }else{
                charCode += 13
            }

        }else if(charCode > 96 && charCode < 123){
            if(charCode + 13 > 122){
                charCode = ((charCode + 13) % 122) + 96;
            }else{
                charCode += 13
            }
        }

        resStr += String.fromCharCode(charCode);
    }

    return resStr;

}


console.log(rot13('Ruby is cool!'));

















// ================================LESSON START============================================





var a = [5,6,7];
var b = {
    0:5,
    1:6,
    2:7,
};
var c = {};
c['z'] = false;
c['c'] = true;
c['a'] = false;
c['x'] = true;

// {
//     false: ['z', 'a']
//     true: ['c', 'x'],
// }


const grouppedByValue = (obj) => {

    return Object.keys(obj).reduce((output,key) => {
        const outputKey = c[key];
        if(!output[outputKey]){
            output[outputKey] = [];
        }

        output[outputKey].push(key)


        return output
    },{})


}


console.log(grouppedByValue(c));



const operator = "+";

const arrOfNumbers = [
    [1,2,3],
    [4,5,6, [7, 8, 9, [10, 11, 12, [13, 14, 15, [16, 17, 18, [19, 20, [21, 22, 23, 24]]]]]]]
];
console.time('proceedNumbers');
  
  const proceedNumbers = (numbersList, operator) => {
    const flatNumbersArr = numbersList.flat(Infinity);
    let result = 0;
    if(operator === '+'){
        for(let n of flatNumbersArr){
            result += n
        }
    }else if( operator === '-' ){
        for(let i = 0; i < flatNumbersArr.length; i++){
            if(i === 0) {
                result = [flatNumbersArr[i]]
            }else{
                result -= flatNumbersArr[i]
            };

        }
    }else if(operator === '*') {
        for(let i = 0; i < flatNumbersArr.length; i++){
            if(i === 0) {
                result = [flatNumbersArr[i]]
            }else{
                result *= flatNumbersArr[i]
            };

        }
    }else if(operator === '/'){
        for(let i = 0; i < flatNumbersArr.length; i++){
            if(i === 0) {
                result = [flatNumbersArr[i]]
            }else{
                result /= flatNumbersArr[i]
            };

        }
    }
    return result
};
proceedNumbers(arrOfNumbers, operator)
console.timeEnd('proceedNumbers');


console.time('proceedNumbers2');
const proceedNumbers2 = (numbersList, operator) => {
    if(!Array.isArray(numbersList)) return NaN

    const whiteList = ['+', '-', '/', '*'];
    if(!whiteList.includes(operator)){
        return NaN
    }
    const numbers = numbersList.flat(Infinity).filter((value) => typeof value === 'number');
    if(!numbers.length) return NaN

    return eval(numbers.join(operator));
}   
proceedNumbers2(arrOfNumbers, operator);
console.timeEnd('proceedNumbers2');


class Test {}
const myClass = new Test();

const isObject = (data) => {
    
    return data?.constructor?.name === 'Object'


}
console.log(isObject(undefined));



const arr = [{value: 1}, {value: 2}, 5, 6,null,true,  7, 'test', 'test2', 'test3', 'test4', false, null, undefined, [123], [456], new Date("2021-06-22"), new Date("2022-02-01"), new Set([1,2,3]), new Set([4,5,6]), Symbol(), Symbol(), Symbol(), new Map()];

function groupByDataType(data) {
    return data.reduce((output, item) => {
        let type = item?.constructor?.name || typeof item;

        if (item === null) {
            type = "null";
        }

        if (!output[type]) {
            output[type] = [];
        }
        output[type].push(item);
        return output;
    }, {});
}



/* написать функцию getSortedString, которая объединит все символы в алфавитном порядке без дубликатов. Запрещено использовать sort, 
запрещено использовать цикл в цикле, запрещено использовать рекурсии, запрещено явно использовать 2 или более цикла типа for, while, f
ilter, map, reduce, etc. */

// результат функции 'abcdefghxyz'"



const data = ['abc', 'def', 'xzy', 'yz', 'fgh'];

function getSortedString(data) {
    const strFromArr = data.join('');

    const resObj = {};
    for(let i = 0; i < strFromArr.length; i++){
        const charCode = strFromArr[i].charCodeAt(0);

        resObj[charCode] = strFromArr[i];
        



    }
    return Object.values(resObj).join('')
     
}
console.log(getSortedString(data));
// 

console.log(groupByDataType(arr));
console.log(new Map().constructor?.name);
// Ожидаемый результат
// {
//   object: [ { value: 1 }, { value: 2 } ],
//   number: [ 5, 6, 7 ],
//   string: [ 'test', 'test2', 'test3', 'test4' ],
//   boolean: [ false ],
//   null: [ null ],
//   undefined: [ undefined ],
//   array: [ [ 123 ], [ 456 ] ],
//   date: [new Date(""2021-06-22""), new Date(""2022-02-01"")],
//   set: [new Set([1,2,3]), new Set([4,5,6])],
//   symbol: [Symbol(), Symbol(), Symbol()],
//   map: [new Map()]
// }




// console.log(Object.entries(a));
// console.log(Object.entries(b));


// const d = [];
// d['z'] = true;
// d['c'] = true;
// d['j'] = true;
// console.log(Object.keys(d));



// c[Symbol(d)] = true;

// console.log(c[Symbol(d)]);


// const generateOBj = (num) => {
//     const res = Array.from({length: num}, (item, i) => {
//         return {foo:'bar'}
//     })
//     return res
// }

// const someArr = generateOBj(5)
// console.log(someArr[1] === someArr[3]);






const data1 = {
    a: 1,
    x: null,
    k: [1, 2],
    b: 2,
    c: {
        d: 1,
        e: {
            s: {
                f: {
                    v: 4,
                },
            },
        },
    },
};

const data2 = [
    {
        a: 1,
        x: null,
        k: [1, 2],
        b: 2,
        c: {
            d: 1,
            e: {
                s: {
                    f: {
                        v: 4,
                    },
                },
            },
        },
    },
];
function deepClone(data) {
    // const stack = [data];
    // let inner =  Array.isArray(data) ? [] : {};
    // let clone = inner;

    // while(stack.length){
    //     const current = stack.pop();
    //     const target = clone;

    //     const currentKeys = Object.keys(current);
    //     for(let key of currentKeys){
    //         const value = current[key];
    //         if(typeof value === 'object' && value !== null) {
    //             inner[key] = Array.isArray(value) ? [] : {};
    //             stack.push(value);
    //             inner = inner[key];
    //         }else{
    //             inner[key] = value
    //         }
    //     }
    // }

    let stack = [{ source: data, target: Array.isArray(data) ? [] : {} }];
    let clone = stack[0].target;

    while (stack.length) {
        const { source, target } = stack.pop();
        const sourceKeys = Object.keys(source);

        for (let key of sourceKeys) {
            let value = source[key];
            if (typeof value === "object" && value !== null) {
                target[key] = Array.isArray(value) ? [] : {};
                stack.push({ source: value, target: target[key] });
            } else {
                target[key] = value;
            }
        }
    }

    return clone;
}

const cloned = deepClone(data1);
console.log(cloned);



// ================================LESSON END============================================

const findEmails = 'We received a few emails: Tina - tina@gmail.com, Misha - toronto2v2@icloud.com, Sania - sania@some.gmail.online But Pavlo provide incorect - P@some.bademailfromPava';


function findAllValidEmails(str = findEmails) {
    const regExp = /\w+@(\w+\.)+\w{2,12}\b/g;
    console.log(str.match(regExp));
}

findAllValidEmails();



const findCapital = 'We received a few emails: Tina - tina@gmail.com, Misha - toronto2v2@icloud.com, Sania - sania@some.gmail.online But Pavlo provide incorect - P@some.bademailfromPava';
function findWordsFromCapital (str = findCapital){

    const regExp = /[A-Z]\w+\b/g
    console.log(str.match(regExp));
}

findWordsFromCapital()



// Перевірити чи в рядку є тільки букви і числа

const checkForNumAndLetStr = 'this string contains only letters spaces and numbers 5 6 7 8';
function checkForNumAndLetters (str=checkForNumAndLetStr){

    const regExp = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9 ]+$/ig

}

checkForNumAndLetters()

const checkForHashtags = '#somehash22. Some guys provide best hash: #pay4life, #pay2pay. ';

const removeHashtags = (str = checkForHashtags) => {

    const regExp = /#\w+/gi
    console.log(str.match(regExp));

}

removeHashtags()



// зробити валідацію пароля. Має бути мінімум одна велика буква, мінімум одна маленька, мінімум одне число і один спецсимвол Довжина має бути більше 12 символів

const validatePassStr = `toronto2V2paSS`;

const validatePass = (str) => {

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).+[a-zA-Z0-9\W_]{11,}$/gm
    return regExp.test(str);

}

validatePass();


const findPhonesStr = '+38 (066) 113-72-10. Tania phone is 0995650382. Vasua phone is 380660820648.'

const findPhoneNumbers = (str) => {

    const regExp = /\+?\d+[0-9\-()\s]{8,16}\d/gi
    console.log(str.match(regExp));
}

findPhoneNumbers(findPhonesStr);




const dublicatesStr = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

const removeRepeated = (str) => {

    return str.match(/(\w+)(?!.*\1)/gi).join(' ')

}

console.log(removeRepeated(dublicatesStr));




const strForEncoding = 'How are you today?';

const encodeStr = (str) => {
    const vowels = ['a','e','i','o','u'];
    return str.replaceAll(/[aeiou]/g, (m) => vowels.indexOf(m)+1)
}

console.log(encodeStr(strForEncoding));

const decodeStr = (str) => {
    const vowels = ['a','e','i','o','u'];
    return str.replaceAll(/[0-5]/g, (m) => vowels[m-1])
};

console.log(decodeStr(encodeStr(strForEncoding)));




function validPhoneNumber(phoneNumber){

    return /^\(\d{3}\)\s\d{3}-\d{4}$/gi.test(phoneNumber)


}

console.log(validPhoneNumber('(1111)555 2345'));


function generateHashtag (str) {
    if(!str) return false
    const replacedStr = str.replaceAll(/\s+|\w+/gi, (m) => {
        if(m.includes(' ')) return '';
        return m[0].toUpperCase() + m.slice(1)
    })
    if(!replacedStr || replacedStr.length >= 140) return false
    return '#' + replacedStr
}


console.log(generateHashtag("some" + " ".repeat(140) + "queu"));






// Задачки
const timeToBirthDay = () => {

    const today = new Date();
    const birthday = new Date(today.getFullYear(), 10, 20,0);
    const dateDiff = birthday - today;

    const msInMonth = 1000 * 60 * 60 * 24 * 30,
          msInDay = 1000 * 60 * 60 * 24,
          msInHour = 1000 * 60 * 60,
          msInMinute = 1000 * 60 * 60,
          msInSecond = 1000

    const monthLeft = Math.floor(dateDiff / msInMonth),
          daysLeft = Math.floor(dateDiff / msInDay) % 30,
          hoursLeft = Math.floor(dateDiff / msInHour) % 24,
          minutesLeft = Math.floor(dateDiff / msInMinute) % 60,
          secondsLeft = Math.floor(dateDiff / msInSecond) % 60

    return `Left: ${monthLeft} month; ${daysLeft} days; ${hoursLeft} hours; ${minutesLeft} minutes; ${secondsLeft} seconds`;
}

console.log(timeToBirthDay());



function makeKebab(str) {
    str = str.replace(str[0], str[0].toLowerCase())
    return str.replace(/[A-Z0-9]/g, m => {
        if(+m){
            return ''
        }else{
            return `-${m.toLowerCase()}`
        }
    })
}

console.log(makeKebab('SomeCa6melCaseButNo3wKebAGab'));




const convertToObject = (str) => {
    const splittedStr = str.split('|');
    return splittedStr.reduce((output, person) => {
        const [name,thing] = person.split(':');
        const value = output[name];

        value ? output[name] = [...value, thing] : output[name] = [thing]


        return output
    },{});

}


console.log(convertToObject('Misha:ball|Sania:blanket|Ann:music|Mark:timber|Tina:food|Mark:chips'));




const flatByStack = (arr) => {
    const queu = [...arr];
    const flattenedArr = [];

    while(queu.length){
        const current = queu.shift();
        if(Array.isArray(current)){
            queu.unshift(...current);
            continue;
        }
        flattenedArr.push(current);
    }

    return flattenedArr

} 

console.log(flatByStack([undefined, 2, [null, 4, ['some', 6, [7, new Set(), [9, {foo:'bar'}]]]]]));



const convertToRoman = (num) => {
    let initialNuber = num;
    const  romanObj = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
    let result = '';

    while(initialNuber > 0){
        for(const n in romanObj){
            if(initialNuber >= romanObj[n]){
                result += n;
                initialNuber -= romanObj[n];
                break;
            }
        }
    }
    return result
}


console.log(convertToRoman(34));


const convertToArabic = (num) => {
    const romanObj = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };

    let result = 0;
    let i = 0;

    while (i < num.length) {
        const currentSymbol = num[i];
        const nextSymbol = num[i + 1];

        if (nextSymbol && romanObj[currentSymbol + nextSymbol]) {
            result += romanObj[currentSymbol + nextSymbol];
            i += 2;
        } else {
            result += romanObj[currentSymbol];
            i += 1;
        }
    }

    return result;
};



console.log(convertToArabic('XXXIV'));








const flatObjects = (...args) => {
   return args.reduce((output, next) => {
        const nextKeys = Object.keys(next);
        for(const key of nextKeys){
            if(!output[key] && output[key]!== null &&output[key]!== false){
                output[key] = next[key];

            }
        }
    return output
   }, {})
}

console.log(flatObjects({a: false,e:'some', b: null}, {a: true, b: 2, c: 3}, {a: 3, c: 3214,d:5}));






const conversionK = {
    m: {
      cm: 100,
      ft: 3.28084,
      mi: 0.000621371,
      in: 39.3701,
      yd: 1.09361,
      km: 0.001,
      m: 1,
    },
    cm: {
      m: 0.01,
      ft: 0.0328084,
      mi: 0.00000621371,
      in: 0.393701,
      yd: 0.0109361,
      km: 0.00001,
      cm: 1,
    },
    ft: {
      m: 0.3048,
      cm: 30.48,
      mi: 0.000189394,
      in: 12,
      yd: 0.333333,
      km: 0.0003048,
      ft: 1,
    },
    mi: {
      m: 1609.34,
      cm: 160934,
      ft: 5280,
      in: 63360,
      yd: 1760,
      km: 1.60934,
      mi: 1,
    },
    in: {
      m: 0.0254,
      cm: 2.54,
      ft: 0.0833333,
      mi: 0.0000157828,
      yd: 0.0277778,
      km: 0.0000254,
      in: 1,
    },
    yd: {
      m: 0.9144,
      cm: 91.44,
      ft: 3,
      mi: 0.000568182,
      in: 36,
      km: 0.0009144,
      yd: 1,
    },
    km: {
      m: 1000,
      cm: 100000,
      ft: 3280.84,
      mi: 0.621371,
      in: 39370.1,
      yd: 1093.61,
      km: 1,
    },
  };

const convertDistances = (valueObj, k) => {
    const {convertTo, distance:{unit, value}} = valueObj;
    return {"unit": convertTo, "value": value * k[unit][convertTo].toFixed(1)}
}

console.log(convertDistances({"distance": {"unit": "mi", "value": 1}, "convertTo": "km"}, conversionK));




const hashStr = "Hey guys. Yesterday #party#nice was awesome. #Coctails tastes better than previous time. I had so #GoodTime!";

const sliceHashtags = (str) => {
    const hashTags = [];
    const dividers = ['!',',',' ', '.', '#'];

    for(let i = 0; i < str.length; i++){
        if(str[i] === '#'){
            let hashtag = '#';
            for(let j = i+1; !dividers.includes(str[j]) ;j++){
                hashtag += str[j]
            }
            hashTags.push(hashtag);
        }
    }
    return hashTags
}

console.log(sliceHashtags(hashStr));




function changeLetters(message) {
    let resStr = "";
    for (let l of message) {
        let charCode = l.charCodeAt(0);

        if (charCode > 64 && charCode < 91) {
            if (charCode + 5 > 90) {
                charCode = ((charCode + 5) % 90) + 64;
            } else {
                charCode += 5;
            }
        } else if (charCode > 96 && charCode < 123) {
            if (charCode + 5 > 122) {
                charCode = ((charCode + 5) % 122) + 96;
            } else {
                charCode += 5;
            }
        }

        resStr += String.fromCharCode(charCode);
    }

    return resStr;
}

console.log(changeLetters('misha'));



function uniqWordsFinder(arr) {
    return arr.filter((item, i,arr) => arr.indexOf(item) === arr.lastIndexOf(item))[0]
}

console.log(uniqWordsFinder(['s','s','s','s','s','d',]));



const sortArr = (arr) => {
    return arr
        .map((letter) => letter.normalize("NFD"))
        .toSorted((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }

            return 0;
        });
};

console.table(sortArr(['h', 's', 'ĥ', 'æ', 'ș', 'ae', 'g', 'ġ']));



const bubbleSort = (arr) => {
    const arrCopy = [...arr]

    for(let j = 0; j < arrCopy.length; j++){
        for(let i = 0; i < arrCopy.length - 1 - j ; i++){
            if(arrCopy[i] > arrCopy[i+1]){
                const buff = arrCopy[i];
                arrCopy[i] = arrCopy[i+1]
                arrCopy[i+1] = buff;
            }
        } 
    }
    console.log(arrCopy);
};

bubbleSort([
    -332, -491, -196, 175, -44, 311, 110, 224, 180, 176, -74, 250, -296, 200,
    420, -474, -127, 403, 234, 140, 484, -71, -58, -379, -125, 78, -258, -166,
    -68, -263, 273, 205, 295, -95, 214, -25, 44, 325, -340, -339, -349, 494,
    150, -174, 99, -338, 429, 328, 438, 141, -238, 456, 40, 339, -228, -245,
    -95, 361, 200, 264, 288, -365, 0, -260, -297, 50, -416, -465, 109, -218,
    444, -192, 92, -244, 42, 483, -127, 386, 434, -99, 428, 272, 184, -2, 488,
    -268, -176, -311, 318, -23, 100, -435, 230, 555, 445, 428, 258, 404, -4,
    268,
]);






const text23 = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and my sun number 0683390791, and the last one (067) 330-20-11. Please use same country code +38 to have opportunity to call me'

// output
// ['+38 (098) 330-00-03', '068-339-09-09', '0683390791', '(067) 330-20-11']


const findNumbers = (str) =>{

    const regExp = /[\(\+]?\d+[0-9\-()\s]+\d/gi

    const match = str.match(regExp);

    return match

} 

console.log(findNumbers(text23));



const str = 'Hello team. Today I bought a lot of  :apple::apple::apple: and I would like to share them with you.  <@Viktor/><@kate/>received:apple::apple::apple:, <@max/>:apple:<@Kate/>:apple:<@Max />:apple:<@Kate />:apple: <@viktor /><@Max /><@Kate /> also got rest:apple::apple:. <@Viktor /><@Kate /><@Max /> Thank you all. <@Max /> you are cool guy. <@Kate /> do not use :apple, apple, apple: and : apple :'


// expected result
// {
//     viktor: 5,
//     kate: 7,
//     max: 4
// }
// ':apple:', 'viktor',  'Max',
//   'Kate',    ':apple:', ':apple:',

const findApples = (str) => {
    const regexp = /(?<=@)\w+|:apple:/gi;
    const matches = str.match(regexp);
    let quant = 0;

    return matches.reduceRight((output, next,i,initialArr) => {

        if(next === ':apple:'){
            quant++;
        }else{
            const name = next.toLowerCase();

            if(!output[name]) {
                output[name] = 0;
                output[name] += quant;
            }else{
                output[name] += quant;
            };

            if(initialArr[i-1] === ':apple:') quant = 0
        }




        return output
    },{})
}

console.log(findApples(str));










const spreadTrafficEvenly = (bannersArr) => {
    let initialIndex = 0;
    for(let i = 0; i < bannersArr.length; i++){
        if(bannersArr[i].show < bannersArr[initialIndex].show){
            initialIndex = i;
        }

    }
    bannersArr[initialIndex].show++;

}






const spreadTrafficEvenly2 = (bannersArr) => {
    const sorted = bannersArr.toSorted((a,b) => a.show - b.show);
    sorted[0].show++;
}


const spreadTrafficEvenly3 = (bannersArr) => {

    const banner = bannersArr[Math.floor(Math.random()*bannersArr.length)];
    banner.show++;
}



// const ads = [
//     { name: "ad1", price: 1.8, show: 0},
//     { name: "ad2", price: 1.75, show: 0 },
//     { name: "ad3", price: 1.33, show: 0 },
//     { name: "ad4", price: 0.48, show: 0 },
// ];

// console.time('first');
// for(let i = 0; i < 1000000; i++ ){

//     spreadTrafficEvenly(ads);
// }
// console.timeEnd('first');




// const ads2 = [
//     { name: "ad1", price: 1.8, show: 0},
//     { name: "ad2", price: 1.75, show: 0 },
//     { name: "ad3", price: 1.33, show: 0 },
//     { name: "ad4", price: 0.48, show: 0 },
// ];

// console.time('second');
// for(let i = 0; i < 1000000; i++ ){

//     spreadTrafficEvenly2(ads2);
// }
// console.timeEnd('second');


// const ads3 = [
//     { name: "ad1", price: 1.8, show: 0},
//     { name: "ad2", price: 1.75, show: 0 },
//     { name: "ad3", price: 1.33, show: 0 },
//     { name: "ad4", price: 0.48, show: 0 },
// ];

// console.time('third');
// for(let i = 0; i < 1000000; i++ ){

//     spreadTrafficEvenly3(ads3);
// }
// console.timeEnd('third');







const ads = [
    { name: "ad1", price: 1.8, show: 0},        
    { name: "ad2", price: 1.75, show: 0 },      
    { name: "ad3", price: 1.33, show: 0 },
    { name: "ad4", price: 0.48, show: 0 },
];

const spreadTrafficByPrice = (banners) => {

    const adsSum = banners.reduce((output, next) => {
        output+=next.price;
        return output
    },0);

    const arrWithPercents = ads.reduce((output,el,i) => {
        const percent = el.price / adsSum;
        const start = output[i-1]?.end || 0;
        const end = start + percent;

        el.start = start;
        el.end = end;
        output.push(el);

        return output

    },[]);

    const randomPath = Math.random();

    const banner =  arrWithPercents.find(el => {
        return randomPath >= el.start && randomPath <= el.end
    });

    banner.show++;


} 


for(let i = 0; i < 1000000; i++){
    spreadTrafficByPrice(ads)

}
console.log(ads);


const buckets = [
    {id: 1, apples: 0, start: 0, end: 0.7}, 
    {id: 2, apples: 0, start: 0.7, end: 1}
];

for(let i = 0; i < 1000000; i++){

    const randomPath = Math.random();

    const singleBucket =  buckets.find(el => {
        return randomPath >= el.start && randomPath <= el.end
    });

    singleBucket.apples++;

}
console.log(buckets);









// output

// -123463269.345123


function parseNumber(text) {


}


function parseNumber(str) {
  let number = 0;
  let hasNumbers = false;
  let isNegative = false;
  let digitsAfterFloat = 0;

  const isNumber = charCode => {
    return charCode > 47 && charCode < 58;
  };

  for (let i = 0; i < str.length; i++) {
    const codeNumber = str[i].charCodeAt(0);

    // if str[i] === ""-"" and next symbol str[i + 1] is number
    if (codeNumber === 45) {
      isNegative = isNumber(str[i + 1].charCodeAt(0));
    } else if (isNumber(codeNumber)) {
      const digit = codeNumber - 48;
      number = number * 10 + digit;
      hasNumbers = true;

      if (digitsAfterFloat > 0) {
        digitsAfterFloat *= 10;
      }
    } else if (
      // if str[i] === "","" or ""."" and next symbol str[i + 1] is number
      !digitsAfterFloat &&
      (codeNumber === 44 || codeNumber === 46) &&
      isNumber(str[i + 1].charCodeAt(0))
    ) {
      digitsAfterFloat = 1;
    } else if (number) {
      // stop all iterations when number is completely parsed.
      break;
    }
  }

  if (!hasNumbers) {
    return NaN;
  }

  const leftPart = isNegative ? -number : number;

  return digitsAfterFloat ? leftPart / digitsAfterFloat : leftPart;
}
const text2 = 'hello world here is my balance -0123463269,345123.123456789 USDT';

console.log(parseNumber(text2));




