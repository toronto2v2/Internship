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




fetchData();