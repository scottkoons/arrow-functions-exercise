// ------- Spreading Objects ---------
const whiskeyTheDog = {
  name: "Whiskey",
  species: "canine",
  cool: true,
};

// make a new dog but override the 'name' key
const gandalfTheDog = { ...whiskeyTheDog, name: "Gandalf", species: "wizard" };

// console.log(whiskeyTheDog);
// console.log(gandalfTheDog);
// -----------------------------------

// -------- Spreading and copies ----------
let odds = [1, 3, 5];
let evens = [2, 4, 6];

let collection = [odds, evens];

let copy = [...collection];

// console.log(collection[0][0]); // 1

copy[0][0] = "REPLACED!";

// console.log(collection[0][0]); // "REPLACED"
// -----------------------------------

// -------- Refactor function ----------
// ES5 function

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// ES6 function
function filterOutOdds(...nums) {
  return nums.filter((num) => num % 2 === 0);
}
// Or a sinlge line arrow function
const filterOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// -------- findMin ----------
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...val) => Math.min(...val);

// findMin(1, 4, 12, -3); // -3
// findMin(1, -1); // -1
// findMin(3, 1); // 1
// console.log(findMin(1, 3));
// -----------------------------------

// -------- mergeObjects ----------
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// -----------------------------------

// -------- doubleAndReturnArgs ----------
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...val) => [
  ...arr,
  ...val.map((num) => num * 2),
];

// [...arr, ...val];
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// ---------------------------------

/** remove a random element in the items array
and return a new array without that item. */

const items = [1, 2, 3, 4];

const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};
// console.log(removeRandom(items));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
