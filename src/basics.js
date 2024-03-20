// Let's introduce 3 very common ways to do FP, with 3 functions that belong to the functor array
// map, filter and reduce

const bananasToApplesMap = (arr) => {
    return arr.map((fr) => fr === 'banana' ? 'apple' : null)
}

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const result = bananasToApplesMap(arrayOfFruit)

console.log(result);

// We have problem of the null value, let's deal with that.

const bananasToApplesFilter = (arr) => {
    return arr.map((fr) => fr === 'banana' ? 'apple' : null).filter(Boolean);
}

const result2 = bananasToApplesFilter(arrayOfFruit)

console.log(result2);

// Can we do a bit better?
// Introducing a powerful function, reduce.


const bananasToApplesReduce = (arr) => {
    return arr.reduce((acc, curr) => {
        return curr === 'banana' ? [...acc, 'apple'] : acc
    }, [])
}



const result3 = bananasToApplesReduce(arrayOfFruit)

// console.log(result3);


