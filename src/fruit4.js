// Let's put it all together!
import { compose } from 'ramda';

//  Fruity logic
const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const fnAppleToOrange = (fr) => fr === 'apple' ? 'orange' : null;
const transformFunction = (fn, arr) => {
    return arr.reduce((acc, curr) => {
        const result = fn(curr);
        return result ? [...acc, result] : acc
    }, [])
}

// This is a higher order function AND it accepts any number of arguments
const composeFunctions = (...fns) => {
    const transformedFns = fns.map((f) => (arr) =>  transformFunction(f, arr))
    const composedFns = compose(...transformedFns)
    return (data) => composedFns(data);
}

const transformBananasToOranges = composeFunctions(fnAppleToOrange, fnBananaToApple);

const arrayOfFruit = ['banana', 'banana', 'banana', 'kiwi'];

const result = transformBananasToOranges(arrayOfFruit)

console.log(result);