import { curry } from 'ramda';

// Maybe Monad, same as last file
const Maybe = (value) => ({
  map: (fn) => value === null ? Maybe(null) : Maybe(fn(value)),
  orElse: (altNFn) => value === null ? Maybe(altNFn()) : Maybe(value),
  withDefault: (fallback) => value === null ? Maybe(fallback) : Maybe(value),
  unwrap: (fn) =>  fn(value)
})

// We want to know someone's favourite fruit, if it is in the provided list,
// if it is not in the list we use the default. We want to return the display
// name of the fruit eg: kiwi fruit

const availableFruit = [{
  name: "Kiwi",
  displayName: "Kiwi Fruit",
},
{
  name: "Strawberry",
  displayName: "Strawberry",
},
{
  name: "Apple",
  displayName: "Apple",
}
]
const getFavoriteFruit = (defaultFruit, fruitList, preferredFruit) =>
  Maybe(preferredFruit || null)
    .map((str) =>  fruitList.find((fruit) => fruit.name === str) ?? defaultFruit)
    .orElse(() => defaultFruit)
    .withDefault(() => defaultFruit)
    .unwrap(pr => pr.displayName)

const fruitCase = "Applel"

const partialFn = curry(getFavoriteFruit);

// Imagine if
export const curriedWithKiwi = partialFn({
  name: "Kiwi",
  displayName: "Kiwi Fruit",
});


console.log(curriedWithKiwi(availableFruit, fruitCase))