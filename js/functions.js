'use strict';

// С помощью рекурсии вычислить факториал числа 10.
function factorial(num) {
    if (num < 0) 
        return -1;
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


// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль
// ('test') => 't' 'e' 's' 't'
function letters(string) {
    console.log(string[0]);
    if (string.length > 0) {
        return letters(string.substr(1));
    }
}
// letters('test');
// letters('javascript');

