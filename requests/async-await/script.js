// async await використовується для надання асинхронному коду вигляду синхронного

const  fetchData  = async () => {
    try{
        console.log(`data fetcing`);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');   // данні потраплять в змінну response тільки коли запит виконається і данні будуть завантажені
        console.log(`received data`);
        const result = await response.text();   // щоб перетворити данні в звичайний текст ми маємо також зачекати поки в response зявляться данні
        console.log(`transform data`);
        console.log(`data is`, result);
    }catch(error){                          // обробка помилки
        throw new Error(`data fetching error`);
    }finally{
        console.log(`finnaly`);
    }

}

// якщо нам потрібно відловити помилки і тд, то ми використовуємо try,catch.finally




// fetchData();


const input = document.querySelector('.input');
const mask = '+38 (XXX) XXX-XX-XX';
input.value = mask;
input.maxLength = mask.length;


input.addEventListener('focus', (event) => {
    setTimeout(() => {
      event.target.selectionStart = event.target.selectionEnd = event.target.value.indexOf('X');
    });
});

input.addEventListener('keydown', (e) => {
    e.preventDefault();
    const el = e.target;
    const isNumbers = (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57);

    if(isNumbers){
        el.value = el.value.replace('X', e.key)
        el.selectionStart = el.selectionEnd =el.value.indexOf('X');

    }else if(e.keyCode === 8 && /\d/.test(el.value[el.selectionStart-1])){

        const moveCursore = el.selectionStart;
        el.value = el.value.slice(0,el.selectionStart-1) + 'X' + el.value.slice(el.selectionStart);
        el.selectionStart = el.selectionEnd = moveCursore-1;
    }else if(e.keyCode === 8){
        el.selectionStart = el.selectionEnd = el.selectionStart-1;
    }else if(e.keyCode === 37){
        el.selectionStart = el.selectionEnd = el.selectionStart-1;
    }else if(e.keyCode === 39){
        el.selectionStart = el.selectionEnd = el.selectionStart+1;

    }


})