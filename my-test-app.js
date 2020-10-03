/** Return a new object with all the keys and values
from obj and a new key/value pair */

const shows = {
  name: "scott",
  age: 50,
  character: "Doof",
};
const movies = {
  best: "Flash Gordon",
  date: 1980,
};

/** Return a new object with a modified key and value. */

// const update = (obj, key, val) => {
//   let newObj = { ...obj };
//   newObj[key] = val;
//   return newObj;
// };
// const update = (obj, key, val) => ({ ...obj }[key] = val);

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
console.log(update(shows, "character", "Flash"));

/** Combine two objects and return a new object. */

// const combine = (obj1, obj2) => {
//   return { ...obj1, ...obj2 };
// };

// const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// console.log(combine(shows, movies));

// const addKeyVal = (obj, key, val) => {
//   let newObj = { ...obj };
//   newObj[key] = val;
//   return newObj;
// };

// console.log(addKeyVal(shows, "last name", "koons"));

// /** Return a new object with a key removed. */

// const removeKey = (obj, key) => {
//   let newObj = { ...obj };
//   delete newObj[key];
//   return newObj;
// };

// console.log(removeKey(shows, "age"));
