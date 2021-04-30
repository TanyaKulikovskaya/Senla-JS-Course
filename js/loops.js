'use strict';

// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
let str = "Я стану крутым программистом";
let words = str.split(" "); // получили массив из отдельных слов

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

str = words.join(" "); // обратно получили строку из массива

// Вычислить факториал числа 9
function factorial(num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
// factorial(9);


// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
// Первый вариант
let string = "Просветление наступит через: ";
for (let i = 10; i > 1; i--) {
    string = string + i + "," + " ";
}
// console.log(string + 1);

// Второй вариант
let enlightenment = "Просветление наступит через: ";
for (let i = 10; i > 0; i--) {
    if (i !== 1) {
        enlightenment = enlightenment + i + "," + " ";
    } else enlightenment = enlightenment + i;
}
// console.log(enlightenment);


// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) console.log(i);
}


/* На основе строки "теперь я мастер циклов javascript" создать новую строку, 
где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.  */

let sentence = "теперь я мастер циклов javascript";
let wordsOfSentence = sentence.split(" ");
let sentence2 = "";

for (let i = 0; i < wordsOfSentence.length; i++) {
    wordsOfSentence[i] = wordsOfSentence[i][0].toUpperCase() + wordsOfSentence[i].substr(1);
}

sentence2 = wordsOfSentence.join("");