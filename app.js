// --------- ES5 Map Callback ---------

// Test data
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// ES5 function
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// ES6 two arrow functions
const arrowArr2 = (arr) => arr.map((num) => num * 2);

// ES6 function single line
const arrowArr = [8, 20, 4, 5, 2, 8, 6, 3].map((num) => num * 2);
// const arrowArr = arr.map((num) => num * 2);

// console.log(`I'm ES5: ${double(arr)}`);
// console.log(`I'm ES6 but I am using multiple lines: ${arrowArr2}`);
// console.log(`I'm ES6 on a single line: ${arrowArr}`);
// -------------------------------------

// ------- Refactor the following function to use arrow functions --------
// Original ES5 function

// Test data
const arr2 = [1, 2, 3, 4, 6];

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// ES6 function
const squareAndFindEvensES6 = arr2
  .map((num) => num ** 2)
  .filter((num) => num % 2 === 0);

// console.log(squareAndFindEvens(arr2));
console.log(squareAndFindEvensES6);
