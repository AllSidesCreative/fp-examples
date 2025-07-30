// A new problem..

const arrayOfFruit = ['banana', 'apple', 'orange', 'kiwi', ['apple', 'apple', 'apple',], ['kiwi', 'kiwi', 'kiwi']];

// Let's say we want the array above with all values in one array, in the same order

const fn = (x) => x;

const result = arrayOfFruit.map(fn);

// console.log(result);

// How do we do this? we want one array with no sub arrays.
// We could write a function that checks the value and returns a deconstruction if it is an array.












// Part 2
// Let's discuss the magnus opus (but not really) of FP... monads

// Promises and arrays are both monads.
// Let's look at arrays only for today.

// Monads are functors (things that implement map) AND...
// they also implement a more powerful function.. flatmap.
// Flatmap is just map that flattens (it unboxes)







const flattenedArr = arrayOfFruit.flatMap(fn);
console.log(flattenedArr)

