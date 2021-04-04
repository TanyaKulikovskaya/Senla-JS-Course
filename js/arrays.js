'use strict';

// Проверить, является ли объект массивом
function isArray(obj) { 
  return Array.isArray(obj);
}

// Используя функцию, найти последний элемент массива, не изменяя его.
function findLastItem(array) {
  if (!isArray(array)) throw new Error('The argument is not an array');
  else if (array.length === 0) throw new Error('An array is empty');
  return array[array.length - 1]; // второй вариант [...array].pop();
}
// let arr = [1, 2, 'last];
// console.log(findLastItem(arr), arr);


/* Создать такую функцию, которая принимала бы массив [1,3,6], 
а возвращала новый массив с дублированными элементами [1,3,6,1,3,6]. */
function duplicateArr(array) {
  if (!isArray(array)) throw new Error('The argument is not an array');
  return array.concat(array);
}
// console.log(duplicateArr([1, 3, 6]));


/* Создать такую функцию, которая принимала бы любое число, 
а возвращала массив, заполненный числами от 1 до n. */
function createArray(n) {
  let array = [];
  for (let i = 1; i <= n; i++) { // вариант для n включительно
    array.push(i);
  }
  return array;
}
// createArray(25);


/* Создать такую функцию, которая принимала бы любое число массивов
и удаляла из каждого массива первый элемент, 
а возвращала массив оставшихся значений 
([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])" */
function changeArrays (...theArrays) {
  for (let i = 0; i < theArrays.length; i++) {
    theArrays[i] = theArrays[i].slice(1);
  } 
  return theArrays;
}
// changeArrays([1, 2, 3], ["x", "y", "z"]);


/* Создать функцию, которая упорядочит буквы в строке "екважбигёзд" 
в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба"). */
function sortByAlphabet(str) {
  return str.split('').sort((a, b) => a.localeCompare(b)).reverse().join('');
}
// sortByAlphabet('екважбигёзд')

/* Создать функцию, которая принимает 3 аргумента: 
любой произвольный массив, начальный номер элемента в массиве, конечный номер.
Ваша функция должна вернуть новый массив, 
состоящий из элементов исходного массива согласно аргументам (с-по)
(getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1,3) → ['б', 'в', 'г']), 
не изменяя исходный массив и не используя циклы. */
function getNewArray(arr, startItem, endItem) {
  return arr.filter(item => (startItem <= arr.indexOf(item) && arr.indexOf(item) <= endItem));
}
// getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1, 3));



// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
let array = [5, 2, -1, 6, 9, -9, 3];
array.sort((a,b) => b - a);
// console.log(array);
// Удвоить элементы массива, не используя циклы.
let doubleArray = array.map(el => el * 2);
// console.log(doubleArray);


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1,2); // возвращает массив удаленных элементов
// console.log(arr);


/* Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и 
на их место вставить “три” и “четыре” соответственно. */
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2, 'три', 'четыре');
// console.log(arr2);


// Вставить в произвольный массив любое значение после второго элемента.
let arr3 = [1, 2, 3];
arr3.splice(2, 0, 'value');
// console.log(arr3);


// Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной.
let arrayOfArrays = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
arrayOfArrays.sort((a, b) => a.length - b.length);


// Создать копию произвольного массива
let arr4 = ['cat', 'raccoon', 'dog'];
let copy1_OfArr4 = arr4.slice(); // первый способ shallow copy
let copy2_OfArr4 = [...arr4]; // второй способ shallow copy
let copy3_OfArr4 = Array.from(arr4); // третий способ shallow copy ES6
let deepCopy = (items) => items.map(item => Array.isArray(item) ? deepCopy(item) : item); // рекурсия deep copy массива массивов


// Отсортировать массив объектов по возрастающему количеству ног животных: 
let arrayOfBeings = [ 
  {
    kind: "tarantula", 
    info: {
      legs: 8, 
      eyes: 8
    }
  }, 
  {
    kind: "french bulldog", 
    info: {
      legs: 4,
      eyes: 2
    }
  }, 
  {
    kind: "human", 
    info: {
      legs: 2, 
      eyes: 2
    }
  }, 
  {
    kind: "lobster",
    info: {
      legs: 10, 
      eyes: 2
    }
  },
];

arrayOfBeings.sort((a, b) => a.info.legs - b.info.legs);

/* Написать функцию, которая принимает массив услуг и два числа, 
представляющих собой время исполнения услуг,
а также возвращает все услуги, находящиеся в диапазоне времени исполнения
и отсортированные от меньшего времени исполнения к большему.  */
const services = [
  {
    service: "service1",
    executionTime: 56
  }, 
  {
    service: "service2",
    executionTime: 97
  }, 
  {
    service: "service3",
    executionTime: 23
  }, {
    service: "service4",
    executionTime: 65
  }, 
  {
    service: "service5",
    executionTime: 2
  }, 
  {
    service: "service6",
    executionTime: 73
  }, 
  {
    service: "service7",
    executionTime: 82
  }, 
  {
    service: "service8",
    executionTime: 19
  }, 
  {
    service: "service9",
    executionTime: 33
  }, 
  {
    service: "service10", 
    executionTime: 42
  }, 
];
// Например, filterServices(services, 20, 60).
function filterServices (arr, a, b) {
  return arr.filter(item => (a <= item.executionTime && item.executionTime <= b)).sort((a, b) => a.executionTime - b.executionTime);
};
// filterServices(services, 20, 60);
