// Imperative coding, let's go through 2 examples

// Problem #1, creating a new array.
const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

// Most developers would do something like this, if something is repeatable make a function
const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const newArr = []

for (let i = 0; i < arrayOfFruit.length; i++) {
    const fruit = fnBananaToApple(arrayOfFruit[i])
    if(fruit) { // handle null cases
        newArr.push(fruit)
    }
}

console.log(newArr);

// Problem #2, creating a string.

let fruit = '';

for (let i = 0; i < arrayOfFruit.length; i++) {
    console.log(fruit); // notice how fruit is mutated on every iteration?
    fruit += arrayOfFruit[i] + ', '
}
// console.log(fruit);

// forEach loop would also work for both of these problems, but you STILL need to
// mutate a string or a new array.