// Let's do some FP basics

// Never mutate state! Everything in  basics.js file is imperative besides the fnBananaToApple function
// We will go through creating strings and arrays in this file.


// Let's introduce 3 very ways to do FP, with 3 functions that belong to the array functor

// Let's solve Problem #1 in basics.js.. kind of..

const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;

const bananasToApplesMap = (arr) => {
  return arr.map(fnBananaToApple)
}

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const result = bananasToApplesMap(arrayOfFruit)

console.log(result);

// We still have problem of the null value, let's deal with that.
// We need to introduce a new function called filter.

const bananasToApplesFilter = (arr) => {
  return arr.map(fnBananaToApple).filter(Boolean);
}

const result2 = bananasToApplesFilter(arrayOfFruit)

console.log(result2);

// Can we do a bit better?
// Introducing a powerful function, reduce.
// Let's solve problem #1 again

const bananasToApplesReduce = (arr) => {
  return arr.reduce((acc, curr) => {
    return curr === 'banana' ? [...acc, 'apple'] : acc
  }, [])
}



const result3 = bananasToApplesReduce(arrayOfFruit)
// console.log(result3);


// Let's now solve problem #2
const result4 = arrayOfFruit.reduce((acc, curr) => `${acc}, ${curr}`,'')

// console.log(result4);


