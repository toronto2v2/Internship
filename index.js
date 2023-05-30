
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










