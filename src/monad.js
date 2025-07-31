// A new problem..

const arrayOfFruit = ['banana', 'apple', 'orange', 'kiwi', ['apple', 'apple', 'apple',], ['kiwi', 'kiwi', 'kiwi']];

// Let's say we want the array above with all values in one array, in the same order

const fn = (x) => x;

const result = arrayOfFruit.map(fn);

// console.log(result);

// How do we do this? we want one array with no sub arrays.
// We could write a function that checks the value and returns a deconstruction if it is an array.












// Part 2

// Arrays are good example of a monad.

// Monads are:
// 1. Functors (things that implement map)
// 2. They also implement a more powerful function... flatmap.
// Flatmap is just map that flattens (it unboxes)
// 3. They unwrap/unbox.




const flattenedArr = arrayOfFruit.flatMap(fn);
console.log(flattenedArr)
// Array is a monad as it has map, flatmap, and it can return things back in the desired state (an array)
