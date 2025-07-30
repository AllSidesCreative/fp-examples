const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const fnAppleToOrange = (fr) => fr === 'apple' ? 'orange' : null;

const transformFunction = (fn, arr) => {
  return arr.reduce((acc, curr) => {
    const result = fn(curr);
    return result ? [...acc, result] : acc
  }, [])
}

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const resultBananaToApples = transformFunction(fnBananaToApple, arrayOfFruit);
const resultApplesToOranges = transformFunction(fnAppleToOrange, resultBananaToApples);

console.log(resultApplesToOranges); // ['orange', 'orange', 'orange']

// Now... how do we get bananas into apples?

const noobFunction = (arr) => {
  const resultBananaToApples = transformFunction(fnBananaToApple, arr);
  const resultApplesToOranges = transformFunction(fnAppleToOrange, resultBananaToApples);
  return resultApplesToOranges
}

console.log(noobFunction(arrayOfFruit));