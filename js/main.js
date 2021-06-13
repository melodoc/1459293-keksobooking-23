/* eslint-disable no-console */
function isCorrectRange(num1, num2) {
  return num2 > num1 && num1 > 0;
}

// src: https://learn.javascript.ru/task/random-int-min-max
function getRandom(num1, num2) {
  return num1 + Math.random() * (num2 + 1 - num1);
}

// ВАРИАНТ 1 -- Генерируем исключение с помощью конструктора Error.
// При ошибке -- дальнейшее выполнение скрипта прерывается
// Проверка -- если раскомментировать законсоленые строки, строка check work, НЕ выводится

function getRandomNum1(min, max, digits) {
  if (!isCorrectRange(min, max)) {
    throw new Error('Out of permissible range');
  }
  const randomNum = getRandom(min, max);
  return digits ? parseFloat(randomNum.toFixed(digits)) : Math.floor(randomNum);
}

console.log(getRandomNum1(1, 100));
// console.log(getRandomNum1(1000, 100));
// console.log(getRandomNum1(-1, 100));
// console.log(getRandomNum1(-1, -10));
// console.log(getRandomNum1(1.1, 1.2, 3));
// console.log(getRandomNum1(-1.1, 1.2, 3));
console.log('check work of 1st option');

// ВАРИАНТ 2 -- Добавляем isInRange. Если все ок -- считаем рандом
// Когда происходит ошибка, управление переходит к блоку catch
// Блок catch задаёт идентификатор error, который содержит объект исключения -- значение, переданное оператору throw
// Дальнейшее выполнение скрипта НЕ прерывается
// Проверка -- строка check work выводится, как и все вызовы getRandomNum2 до нее

function getRandomNum2(min, max, digits) {
  const isInRange = isCorrectRange(min, max);
  try {
    if (isInRange) {
      const randomNum = getRandom(min, max);
      return digits
        ? parseFloat(randomNum.toFixed(digits))
        : Math.floor(randomNum);
    }
    throw new Error('Out of permissible range');
  } catch (error) {
    return error.message;
  }
}

console.log(getRandomNum2(1, 100));
console.log(getRandomNum2(1000, 100));
console.log(getRandomNum2(-1, 100));
console.log(getRandomNum2(-1, -10));
console.log(getRandomNum2(1.1, 1.2, 3));
console.log(getRandomNum2(-1.1, 1.2, 3));
console.log('check work of 2nd option');

// ВАРИАНТ 3 -- Без try/catch просто выбрасываем исключение или генерим рандом
// При ошибке -- дальнейшее выполнение скрипта прерывается
// Проверка -- если раскомментировать законсоленые строки, строка check work, НЕ выводится

function getRandomNum3(min, max, digits) {
  const isInRange = isCorrectRange(min, max);
  if (!isInRange) {
    throw new Error('Out of permissible range');
  }
  const randomNum = getRandom(min, max);
  return digits ? parseFloat(randomNum.toFixed(digits)) : Math.floor(randomNum);
}

console.log(getRandomNum3(1, 100));
// console.log(getRandomNum3(1000, 100));
// console.log(getRandomNum3(-1, 100));
// console.log(getRandomNum3(-1, -10));
// console.log(getRandomNum3(1.1, 1.2, 3));
// console.log(getRandomNum3(-1.1, 1.2, 3));
console.log('check work of 3d option');

// ВАРИАНТ 4 -- Выбрасываем исключение и потом помещаем в блок try
// Проверка -- строка check work, выводится, после ошибки в блоке try, вычисления прерываются

function getRandomNum4(min, max, digits) {
  const isInRange = isCorrectRange(min, max);
  if (!isInRange) {
    throw new Error('Out of permissible range');
  }
  const randomNum = getRandom(min, max);
  return digits ? parseFloat(randomNum.toFixed(digits)) : Math.floor(randomNum);
}

try {
  console.log(getRandomNum4(1, 100));
  console.log(getRandomNum4(1000, 100));
  console.log(getRandomNum4(-1, 100));
  console.log(getRandomNum4(-1, -10));
  console.log(getRandomNum4(1.1, 1.2, 3));
  console.log(getRandomNum4(-1.1, 1.2, 3));
}
catch(error) {
  console.log(error);
}

console.log('check work of 4th option');

// ВАРИАНТ 5 -- Без исключений
// Проверка -- строка check work, очевидно, выводится

function getRandomNum5(min, max, digits) {
  const isInRange = isCorrectRange(min, max);
  if (isInRange) {
    const randomNum = getRandom(min, max);
    return digits
      ? parseFloat(randomNum.toFixed(digits))
      : Math.floor(randomNum);
  }
  return 'Out of permissible range';
}

console.log(getRandomNum5(1, 100));
console.log(getRandomNum5(1000, 100));
console.log(getRandomNum5(-1, 100));
console.log(getRandomNum5(-1, -10));
console.log(getRandomNum5(1.1, 1.2, 3));
console.log(getRandomNum5(-1.1, 1.2, 3));
console.log('check work of 5 option');
