function isCorrectRange(num1, num2) {
  return num2 > num1 && num1 > 0;
}

// src: https://learn.javascript.ru/task/random-int-min-max
function getRandom(num1, num2) {
  return num1 + Math.random() * (num2 + 1 - num1);
}

function getRandomNum(min, max, digits) {
  try {
    if (!isCorrectRange(min, max)) {
      throw new Error('Out of permissible range');
    }
    if (digits) {
      return parseFloat(getRandom(min, max).toFixed(digits));
    }
    return Math.floor(getRandom(min, max));
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
getRandomNum(1, 100);
getRandomNum(1000, 100);
getRandomNum(-1, 100);
getRandomNum(-1, -10);
getRandomNum(1.1, 1.2, 3);
getRandomNum(-1.1, 1.2, 3);
