'use strict';

// Числа

// Получить число Pi из Math и округлить его до двух знаков после точки
let num1 = +Math.PI.toFixed(2);
// console.log(num1);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
let num2 = Math.max(10, 17, 5, 12, 15, 99, 1);
// console.log(num2);
let num3 = Math.min(10, 17, 5, 12, 15, 99, 1);
// console.log(num3);

// С помощью Math.random получить случайное число и округлить его до двух цифр после запятой
let num4 = Math.random();
num4 = +num4.toFixed(2);
// console.log(num4);

// С помощью Math.random получить случайное число от 0 до Х
let maxNum; // число X
let num5 = Math.random() * maxNum;
// console.log(num5);

// Получить число из строки '100$' 
let priceStr = '100$';
let num6 = +priceStr.slice(0, -1); // первый способ 
// console.log(num6);
let num7 = parseInt(priceStr); // второй способ
// console.log(num7);