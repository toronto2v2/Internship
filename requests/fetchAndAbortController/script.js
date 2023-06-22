// за допомогою fetch() ми можемо відправляти різні запити

/*
__________________________________________________________________________________________
|                                                                                        |
|                                       fetch(urlString, obtionsObj)                     |
|________________________________________________________________________________________| */
let fetchh;

// Аргументи:
//  urlString (обовязковий)     ===>    посилання на ресурс куди будемо робити запит. Якщо передаємо тільки цей аргумент то це буде звичайний "GET" запит
//  obtionsObj (не обовязковий) ===>    обєкт з певними налаштуваннями:
//                                      ===> method: 'POST'/'PUT'/'PATCH'/'DELETE'/
//                                      ===> headers: обєкт з заголовками: {'Content-Type': 'application/json;charset=utf-8'}
//                                      ===> body: те, що відправимо на сервер: JSON.stringify(someData) або FormData, або BufferSource/Blob /UrlSearchParams

const fetchData = async () => {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // робимо простий get запит
        const result = await response.json()    // прочитаємо відповідь і повернемо в вигляді тексту, або response.json() - декодую інфу в форматі json
        //                                          response.formData()/response.blob()/response.arrayBuffer()
        if(response.status!==200 && !response.ok){
            throw Error('error ocured')
        }
        console.log(result);

    }catch(error){
        console.dir(error);
    }
}

document.querySelector('.fetchData').addEventListener('click', fetchData);


/*
__________________________________________________________________________________________
|                                                                                        |
|                                       new AbortController()                            |
|________________________________________________________________________________________| */
let AbortControllerr;

// AbortController використовується для переривання будь якого асинхронного коду, запитів і тп

const controller = new AbortController();

const fetchData2 = async () => {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1',{signal:controller.signal}); // fetch буде слухати подію 'abort'
        controller.abort();     // так як ми перервали запит, в catch потрапить помилка DOMException: The user aborted a request.
        const result = await response.json()    // 
        //                                         
        if(response.status!==200 && !response.ok){
            throw Error('error ocured')
        }
        console.log(result);

    }catch(error){
        console.dir(error); // code: 20, message: The user aborted a request, name:AbortError
    }
}

fetchData2()
// щоб перервати запит викликаємо controller.abort()
