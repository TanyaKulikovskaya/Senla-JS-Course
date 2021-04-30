'use strict';

// Переменные 
const userName;
const userLastName;
let userAge;
let userInfo;

console.log(test); // undefined, т.к. объявление переменной с помощью var "вспывает",
var test = 'string';// а присвоение значения происходит в этой строке

var x = 'string';
var x = 'string 2'; // var позволяет повторно объявить переменную
console.log(x); // 'string 2'

console.log(test); /* ошибка ReferenceError, т.к. переменными let нельзя пользоваться до их объявления, 
они находятся в Temporal Dead Zone*/
let test = 'string'; // 


const x = 'string';
const x = 'string 2';// синтактическая ошибка, - повторное объявление переменной x с помощью const
console.log(x);

let num = 12;
let num = 1; // синтактическая ошибка - повторное объявление переменной num с помощью let
console.log(num);
