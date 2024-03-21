import { curry } from 'ramda';

// Let's look at something else now.. currying.

const fn = (fruit, fn) => {
    console.log('fruit is', fruit);
    fn(fruit);
    console.log('---');

}

const consoleFn = (x) => console.log(x);

const noop = () => {}

const returnFn = (x) => x

// Notice anything wrong?
fn('apple', consoleFn);
fn('apple', noop);
fn('apple', returnFn);

fn('peach', consoleFn);
fn('peach', noop);
fn('peach', returnFn);

// let's tidy this up

// const curriedFn = curry(fn);
//
// const curriedWithApple = curriedFn('apple');
// const curriedWithPeach = curriedFn('peach');
//
// curriedWithApple(consoleFn)
// curriedWithApple(noop)
// curriedWithApple(returnFn)
//
// curriedWithPeach(consoleFn)
// curriedWithPeach(noop)
// curriedWithPeach(returnFn)