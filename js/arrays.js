'use strict';

// Используя функцию, найти последний элемент массива, не изменяя его.

function findLastItem(array) {
  return array[array.length - 1];
}
// console.log(findLastItem([1, 3, 5, 7, 'last']));


/* Создать такую функцию, которая принимала бы массив [1,3,6], 
а возвращала новый массив с дублированными элементами [1,3,6,1,3,6]. */
function duplicateArr(array) {
  return array.concat(array);
}
// console.log(duplicateArr([1, 3, 6]));