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