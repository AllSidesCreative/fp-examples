// Maybe Monad, same as last file
const Maybe = (value) => ({
  map: (fn) => value === null ? Maybe(null) : Maybe(fn(value)),
  orElse: (altNFn) => value === null ? Maybe(altNFn()) : Maybe(value),
  withDefault: (fallback) => value === null ? Maybe(fallback) : Maybe(value),
  unwrap: (fn) =>  fn(value)
})


const getFavoriteFruit = (fruitList, preferredFruit) =>
  Maybe(preferredFruit || null)
    .map((str) =>  fruitList.find((fruit) => fruit.name === str))
    .orElse(() => fruitList.find((fruit) => fruit.isDefault))
    .withDefault(() => fruitList.find((fruit) => fruit.isDefault))
    .unwrap((pr) => pr.displayName)



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

const fruitCase = "Orange"