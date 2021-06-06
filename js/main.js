function isCorrectRange(num1, num2) {
  return num1 > 0 && num2 > 0 && num1 !== num2 && num2 > num1;
}

// src: https://learn.javascript.ru/task/random-int-min-max
function getRandom(num1, num2) {
  return num1 + Math.random() * (num2 + 1 - num1);
}

function getIntRandom(min, max) {
  if (isCorrectRange(min, max)) {
    return Math.floor(getRandom(min, max));
  }
  return Error('Out of permissible range');
}

function getFloatRandom(min, max, digits) {
  if (isCorrectRange(min, max)) {
    return parseFloat(getRandom(min, max).toFixed(digits));
  }
  return Error('Out of permissible range');
}

getIntRandom(1, 100);

getFloatRandom(1.1, 1.2, 3);
