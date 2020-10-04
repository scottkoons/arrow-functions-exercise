// ES5
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;

// ES6
let {
  numbers: { a, b },
} = obj;

// ES5 Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES6 Swap
[arr[0], (arr[1] = arr[1]), arr[0]];

// ------ raceResults() ---------

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
console.log(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]));
