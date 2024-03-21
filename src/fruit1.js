// Basic example of bridging data with FC.

/*
 Take an array of bananas and turn it into an array of apples.
 Assumption is input is an array of strings, any banana will turn to an apple,
 anything else will be filtered out as nothing.
 */

const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const bananasToApples = (arr) => {
  return arr.reduce((acc, curr) => {
      const fruit = fnBananaToApple(curr)
      return fruit ? [...acc, fruit] : acc
  }, [])
}

// Do the same thing but take an apple and turn it into an orange

const fnAppleToOrange = (fr) => fr === 'apple' ? 'orange' : null;
const applesToOranges = (arr) => {
    return arr.reduce((acc, curr) => {
        const fruit = fnAppleToOrange(curr)
        return fruit ? [...acc, fruit] : acc
    }, [])
}

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const transformedArrOfApples = bananasToApples(arrayOfFruit);
const transformedArrOfOranges = applesToOranges(transformedArrOfApples);
console.log(transformedArrOfApples);
console.log(transformedArrOfOranges);

// Notice the duplication between these 2 functions?