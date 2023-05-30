// Створити дату можна декількома способами:

let date = new Date();                               // поверне дату на данний момент
date = new Date(('December 17, 1995 03:24:00'))      // розпарсить дату та відпрацює адекватно
date = new Date('1995-12-17T03:24:00')               // також адекватно розпарсить
date = new Date(1995, 11, 17)                        // спрацює
date = new Date(1995, 11, 17, 3, 24, 0)              // спрацює
date = new Date(1685367501874)                       // можна передавати timeStamp



Date.now()          // повертає теперішній timestamp


Date.parse()        // парсить рядок з датою і повертає timestamp;
                    // парсин аналогічний new Date(('December 17, 1995 03:24:00'))
//


Date.prototype.getFullYear()                // дозволяє отримати рік
Date.prototype.getMonth()                   // дозволяє отримати місяць
Date.prototype.getDate()                    // дозволяє отримати число 
Date.prototype.getDay()                     // дозволяє отримати номер дня тижня
Date.prototype.getHours()                   // дозволяє отримати години
Date.prototype.getMinutes()                 // дозволяє отримати хвилини
Date.prototype.getSeconds()                 // дозволяє отримати секунди
Date.prototype.getMilliseconds()            // дозволяє отримати мілісекунди
Date.prototype.getTime()                    // дозволяє отримати timestamp з обєкту дати




Date.prototype.setFullYear()                // дозволяє встановити певний рік і поверне timestamp
Date.prototype.setMonth()                   // дозволяє встановити певний місяць і поверне timestamp
Date.prototype.setDate()                    // дозволяє встановити певне число місяця і поверне timestamp
Date.prototype.setHours()                   // дозволяє встановити певну годину і поверне timestamp
Date.prototype.setMinutes()                 // дозволяє встановити певну хвилину і поверне timestamp
Date.prototype.setSeconds()                 // дозволяє встановити певну секунду і поверне timestamp
Date.prototype.setMilliseconds()            // дозволяє встановити певну мілісекунду і поверне timestamp
Date.prototype.setTime()                    // дозволяє встановити певну дату, яка представлена timestamp


new Date().toTimeString();                  // 21:33:38 GMT+0300 (Восточная Европа, летнее время)
new Date().toJSON();                        // 2023-05-29T18:33:23.795Z
new Date().toString();                      // Mon May 29 2023 21:35:34 GMT+0300 (Восточная Европа, летнее время)
new Date().toUTCString();                   // Mon, 29 May 2023 18:36:17 GMT