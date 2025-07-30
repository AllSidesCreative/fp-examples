import { compose } from 'ramda';
const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const fnAppleToOrange = (fr) => fr === 'apple' ? 'orange' : null;
const transformFunction = (fn, arr) => {
  return arr.reduce((acc, curr) => {
    const result = fn(curr);
    return result ? [...acc, result] : acc
  }, [])
}
const transformFnBananaToApple = (arr) => transformFunction(fnBananaToApple, arr)
const transformFnAppleToOrange = (arr) => transformFunction(fnAppleToOrange, arr);

const transformBananasToOranges = compose(transformFnAppleToOrange, transformFnBananaToApple);

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const result = transformBananasToOranges(arrayOfFruit);

console.log(result);
// Can anyone spot any problems? Hint: transformFnBananaToApple & transformFnAppleToOrange