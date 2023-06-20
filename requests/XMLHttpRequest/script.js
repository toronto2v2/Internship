'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');


inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // Методы MLHttpRequest():

    // Метод request.open(method(get/post и др), url(путь), async(асинхронный или синхронный), login, password)

    // Метод request.setRequestHeader() - также для отправи запроса необходимо указать, что именно мы отправляем,
    // что там закодированно. Что б сервер точно понимал что он принимает в себя

    // Метод request.send() - Может принимать какие то данные body, если у нас метод POST. В GET BODy нету. Отправляет запрос


    // Свойства XMLHttpRequest():

    // 1) status - коды состояния. Например 404, 101 и тп
    // 2) statusText - текстовое описание status
    // 3) response - ответ от сервера, то что мы должны использовать на клиенте
    // 4) readyState - текущее состояние нашего запроса. Обозначается либо цифрой либо соответствующими словами
    //     (0 - UNSENT; 1 - OPENED; 2 - HEADERS_RECEIVED; 3 - LOADING; 4 - DONE)

    // События XMLHttpRequest():

    // 1) readystatechange - отслеживает статус готовности нашего запроса в данный текущий момент. Следит за readystate
    // 2) load - полная загрузка запроса


    request.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    // request.setRequestHeader('content-type', 'application/json; charset=utf-8', 'Access-Control-Allow-Origin:*'); данная 
    // строка не работала из-за особенностей получения курса с зайта НБУ

    request.send();

    request.addEventListener('load', () => {
        if (request.status == 200){
            const data = JSON.parse(request.response);
            for( let key of data){
                if (key.cc == 'USD'){
                    inputUsd.value = (+inputUah.value / key.rate).toFixed(2);
                }
            }
        }else{
            inputUsd.value = 'Ошибка';
        }
    });



     
});