'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // ваш код поместить тут

    /* Создать функцию которая принимает два аргумента. 
    Функция проверяет является ли первый элемент родителям для второго элемента 
    isParent(parent, child) => true || false */
    function isParent (parent, child) {
        return child.parentNode === parent;
    }
    
    // Найти элемент, который находится перед списком ul
   document.querySelector('ul').previousElementSibling;

    // Найти параграф и получить его текстовые содержимое
    document.querySelector('p').textContent;


    /* Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта,
    о типе узла, имени узла и количестве дочерних узлов. */

    // Найти список и добавить ему класс "list"
    document.querySelector('ul').classList.add('list');
    
});