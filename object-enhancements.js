// ---------- Same keys and values ----------
// ES5
// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
// ES6
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}
// --------------------------------

// ---------- Computed Property Names ----------
//ES5
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt",
// };

// instructor[favoriteNumber] = "That is my favorite!";

// ES6
let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};
// --------------------------------

// ---------- Object Methods ----------
//ES5
// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };

// ES6
let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

// ---------- createAnimal function ----------
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
// console.log(s.bleet()); //"BAAAAaaaa"
