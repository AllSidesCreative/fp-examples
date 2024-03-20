// Reduce can be used in many ways, it is VERY useful
// Notice the last argument of the reduce function.
const arrayOfFruit = ['banana', 'apple', 'orange', 'kiwi'];

// Create an object
const createKeyValuePairsFruit = arrayOfFruit.reduce((acc, curr, i) => {
    return {
        ...acc,
        [curr]: {
            id: i+1,
            fruit: curr
        }
    }
}, Object.create(null))

console.log(createKeyValuePairsFruit);

// Count stuff
const lengthOfAllCharsInArray = arrayOfFruit.reduce((acc, curr) => {
    return acc + curr.length
}, 0)

console.log(lengthOfAllCharsInArray);
