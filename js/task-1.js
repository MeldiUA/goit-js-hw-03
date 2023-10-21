"use strict"

function slugify(title) {
  return title.toLowerCase().replace(/ /g,'-'); // Я подумав, що так краще), навіщо робити двойну конвертацію строки в масив і назад, хоча строка також масив свого роду
  //return title.toLowerCase().split(' ').join('-');
}

console.group('TASK 1');

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

console.groupEnd();
