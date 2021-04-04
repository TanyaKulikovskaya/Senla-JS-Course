'use strict';
// Проверить, является ли переменная числом
function isNumber(value) { 
    return typeof value === 'number' && isFinite(value);
}

/* Создать функцию multiply, которая будет принимать любое количество
чисел и возвращать их произведение: multiplay(1,2,3) = 6. 
Если нет ни одного аргумента вернуть ноль. */

function multiply(...theArgs) {
    let multiply = 1;
    if (theArgs.length > 0) {
        for (let i = 0; i < theArgs.length; i++) {
            if (!isNumber(theArgs[i])) 
                throw new Error ('At least one of the arguments is not a number');
            multiply *=theArgs[i];
        } 
        return multiply;
    } else return 0;
}
// multiply(1, 2, 3);

// С помощью рекурсии вычислить факториал числа 10.
function factorial(num) {
    if (isNumber(num)) {
        if (num < 0) 
            throw new Error('An argument is negative');
        else if (num === 0) 
            return 1;
        else 
            return (num * factorial(num - 1));
    }
    else 
        throw new Error ('An argument is not a number');
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


/* Создать две функции и дать им осмысленные названия:
первая функция принимает массив и callback, возвращая строку из обработанного массива.
вторая функция (callback) обрабатывает каждый элемент массива  */
function getStringFromArray (arr, callback) {
    let str ='Ages: ', newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return str = str + newArr.join(', ');
}

function getAge (year) {
    return (new Date()).getFullYear() - year;
}

// getStringFromArray([1985, 1990, 2000], getAge);