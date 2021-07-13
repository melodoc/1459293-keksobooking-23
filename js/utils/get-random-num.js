/* eslint-disable no-console */
// end start
function isCorrectRange(num1, num2) {
  return num2 > num1 && num1 > 0;
}

// src: https://learn.javascript.ru/task/random-int-min-max
function getRandom(num1, num2) {
  return num1 + Math.random() * (num2 + 1 - num1);
}

function getRandomNum(min, max, digits) {
  if (!isCorrectRange(min, max)) {
    throw new Error('Out of permissible range');
  }
  const randomNum = getRandom(min, max);
  return digits ? parseFloat(randomNum.toFixed(digits)) : Math.floor(randomNum);
}

try {
  console.log(getRandomNum(1, 100));
}
catch(error) {
  console.log(error);
}
