// Basic example of bridging data with FC.


/*
 Take an array of bananas and turn it into an array of apples.
 Assumption is input is an array of strings, any banana will turn to an apple,
 anything else will be filtered out as nothing.
 */
const bananasToApples = (arr) => {
  return arr.reduce((acc, curr) => {
      return curr === 'banana' ? [...acc, 'apple'] : acc
  }, [])
}

const applesToOranges = (arr) => {
    return arr.reduce((acc, curr) => {
        return curr === 'apple' ? [...acc, 'orange'] : acc
    }, [])
}

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const transformedArrOfApples = bananasToApples(arrayOfFruit);
const transformedArrOfOranges = applesToOranges(transformedArrOfApples);
console.log(transformedArrOfApples);
console.log(transformedArrOfOranges);
