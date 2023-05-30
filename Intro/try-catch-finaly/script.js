


// Конструкція try...catch дозволяє зловити помилки, які з’явились по ходу виконання коду.
// він не зловіть синтаксичні помилки і тп, адже таим чином інтерпритатор просто не зможе прочитати код

try {
    console.log(`script started`);/* відпрацює */
    alalal;/* тут помилка */
/* }}}}} */ /* <=== ось таку помилку не зловить */
    console.log(`script ended`);/* не відпрацює, так як зверху помилка */
} catch(error) {
    console.log(`erroor`);/* відпрацюж так як в блоці try виникла помилка */
    console.log(error.name);
}



/* код в нашій конструкції синхронний, тому в наступному прикладі скрипт впаде, адже функція виконається 
пізніше, коли двіжок вже покинув блок catch */

try {
    setTimeout(function() {
      noSuchVariable; // скрипт впаде тут
    }, 2000);
  } catch (e) {
    console.log(( "не сработает" ));
  }

// щоб верхній код спрацював протрібно ввесь блок перенсти в таймер:

setTimeout(() => {
    try{
        console.log(`script began`);
        noSuchVariable;
        console.log(`script ended`);

    }catch(error){
        console.log(`error occur: ${error.message}`);
    }
}, 2000)



/* 
Ми можемо викидувати помилки в блоці try якщо ми наприклад зробили запит на сервер
і очікуємо що в ньому буде наприклад поле age, але після отримання данних такого поля нема */


function emulate(){

    const exampleData = {
        name: 'misha',
        sex: 'male',
        // age: 5
    };
    
    try{
    
        const replyFromServer = {...exampleData};
    
        if(!replyFromServer.age){
            throw new Error('age are not availableeeeeeee');
        }
        dsadsasd();
    
    }catch(e){ 
        if(e.name != 'Error' ){
            throw e
        }
        console.log(e.message);
        
    }
}

try{
    emulate()
}catch(e){
    console.log(`Oughter mistake: ${e.message}`);
}

