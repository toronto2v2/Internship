// Основна відмінність між var та let в області видимості

/* 1. var має функціональну область видимості чи глобальну область видимості.
Це означає, що змінна var доступна будь-де функції або в будь-якій частині 
програми, якщо вона оголошена поза функцією. */

for(var i = 0; i <= 2; i++){
    // pseudo code
};

console.log(i); /* output: 3 */

/* 2.Змінна, оголошена з використанням ключового слова let, має блочну область 
видимості. Це означає, що змінна let доступна тільки в блоці коду, в якому вона 
була оголошена, та в будь-яких вкладених блоках. При цьому змінна недоступна за межами блоку. */

for(let j = 0; j <= 2; j++){
    // pseudo code
};

console.log(j); /* output: змінна j недоступна */

/* 3.Крім того, змінна, оголошена з використанням ключового слова const, також має блокову область 
видимості, але відрізняється від змінної let тим, що її значення не може бути змінено після ініціалізації. */

const numeric = 5;

// =========================================================================================================

const arr2 = [1,2,3,4];

const obj = {
    name: 'misha',
    age: 25,
};

const additObg = {
    hobby: 'chess',
}

const copy = {...obj, sex: 'male', ...additObg};


const str = 'misha dont play tennis';

for(let letter of str){
}

const arr = [...str];

const copiedArr = [...arr2];

// ===========================================================

// rest оператором можна передавати будь яку кількість аргументів в вигляді масиву
// і далі робити те що потрібно

function sumNumbers (...nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;

}

sumNumbers(1,2,3,4);

function checkArgs(a,b){
    console.log(a,b);
    if(arguments.length > 2){
        console.log(arguments);
    }else{
        console.log(`no additional args`);
    }
};

checkArgs(1,2);



