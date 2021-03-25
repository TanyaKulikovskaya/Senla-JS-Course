'use strict';

/* Создать функцию multiply, которая будет принимать любое количество
чисел и возвращать их произведение: multiplay(1,2,3) = 6. 
Если нет ни одного аргумента вернуть ноль. */

function multiply(...theArgs) {
    let multiply = 1;
    if (theArgs.length > 0) {
        for (let i = 0; i < theArgs.length; i++) {
            multiply *=theArgs[i];
        } 
        return multiply;
    } else return 0;
}
// (multiply(1,2,3));



// С помощью рекурсии вычислить факториал числа 10.
function factorial(num) {
    if (num < 0) 
        return;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
// factorial(10);


// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'
function reverseStr(str) {
    return str.split("").reverse().join("");
}
// reverseStr('test');


// Написать функцию, которая проверяет является ли слово палиндромом
function isPalindrome (word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('')
}
// isPalindrome('eye');

/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
где каждый символ разделен пробелом и заменён на значение символа из юникода. 
((hello) => "104 101 108 108 111") */
function getUnicode(str) {
    let arr = str.split(''); // получили массив из отдельных букв
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].codePointAt(0); // заменили на значение символа из юникода
    }
    let resultStr = arr.join(' '); // обратно объединили символы в строку
    return resultStr;
}
// getUnicode('hello');


// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль
// ('test') => 't' 'e' 's' 't'
function stringSplit(string) {
    console.log(string[0]);
    if (string.length - 1 > 0) {
        return stringSplit(string.substr(1));
    }
}
// stringSplit('test');
// stringSplit('javascript');


