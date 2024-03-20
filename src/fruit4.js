import { compose } from 'ramda';
const fnBananaToApple = (fr) => fr === 'banana' ? 'apple' : null;
const fnAppleToOrange = (fr) => fr === 'apple' ? 'orange' : null;

// Difference here is we're checking the type of param passed in, it could be an array or a string
// It is now able to deal with single strings on their own
// banana -> orange
const transformFunction = (fn, data) => {
    if(typeof data === 'string') {
        return fn(data) || ''
    }
    return data.reduce((acc, curr) => {
        const result = fn(curr);
        return result ? [...acc, result] : acc
    }, [])
}
const transformFnBananaToApple = (arr) => transformFunction(fnBananaToApple, arr)
const transformFnAppleToOrange = (arr) => transformFunction(fnAppleToOrange, arr);

const transformBananasToOranges = compose(transformFnAppleToOrange, transformFnBananaToApple);

const fruit = 'banana';

const result = transformBananasToOranges(fruit);

console.log(result);

console.log( transformBananasToOranges(['banana', 'banana', 'banana', 'kiwi']))