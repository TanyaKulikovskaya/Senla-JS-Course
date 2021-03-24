'use strict';

// Строки

let string = 'string test example'

//Получить первую и последнюю букву строки

let firstChar = string[0];
// console.log(firstChar);
let lastChar = string[string.length - 1];
// console.log(lastChar);


// Сделать первую и последнюю буквы в верхнем регистре
firstChar = firstChar.toUpperCase();
lastChar = lastChar.toUpperCase();

let upperString = firstChar + string.slice(1, length - 1) + lastChar;
// console.log(upperString);

// Найти положение слова string в строке
let posOfString = string.indexOf('string');
// console.log(posOfString);

// Найти положение второго пробела
let posOfSecondSpace = string.indexOf(' ', string.indexOf(' ') + 1);
// console.log(posOfSecondSpace);

// Получить строку со 2-ого символа длинной 6 букв
let subString = string.substr(1, 6);
// console.log(subString);

// Получить строку с 1 по 7 символ
let subString2 = string.slice(0, 7);
// console.log(subString2);

// Из двух переменных типа number x = 20, y = 21 получить строку '2021' 
let x = 20;
let y = 21;
let str = String(x) + String(y);// первый способ
let str2 = "" + x + y; // второй способ
let str3 =`${x}${y}`; // третий способ
// console.log(str);
// console.log(str2);
// console.log(str3);
