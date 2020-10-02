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

// ---------- My rest test ---------
const sumAll = (...values)

// -----------------------------------

// -------- findMin ----------
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// findMin(1, 4, 12, -3); // -3
// findMin(1, -1); // -1
// findMin(3, 1); // 1
