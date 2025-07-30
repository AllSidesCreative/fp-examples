// Let's go through three examples of problems that come up a fair bit
// Imperative style

const getRawNameImperative = (user) => {
  if(user?.displayName) {
    return user?.displayName
  }
  else if(user?.profile?.name) {
    return user?.profile?.name
  }
  else if(user?.email) {
    return user?.email
  }
  return null
}

const getDisplayNameImperative = (user) => {
  let name = ""
  if(!user) {
    return null
  }
  if(user?.displayName) {
    name =  user?.displayName
  }
  else if(user?.profile?.name) {
    name =  user?.profile?.name
  }
  else if(user?.email) {
    name =  user?.email
  }
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : null
}

// Maybe Monad
const Maybe = (value) => ({
  map: (fn) => value === null ? Maybe(null) : Maybe(fn(value)),
  orElse: (altNFn) => value === null ? Maybe(altNFn()) : Maybe(value),
  withDefault: (fallback) => value === null ? Maybe(fallback) : Maybe(value),
  unwrap: (fn) =>  fn(value),
})

// We want to know someone's favourite fruit, if it is in the provided list,
// if it is not in the list we use the default. We want to return the display
// name of the fruit eg: kiwi fruit
const getFavoriteFruit = (fruitList, preferredFruit) =>
  Maybe(preferredFruit || null)
    .map((str) =>  fruitList.find((fruit) => fruit.name === str))
    .orElse(() => fruitList.find((fruit) => fruit.isDefault))
    .withDefault(() => fruitList.find((fruit) => fruit.isDefault))
    .unwrap((pr) => pr.displayName)


const fl = [{
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
  isDefault: true,
}
]

const fruitCase = null

console.log(getFavoriteFruit(fl, fruitCase))
const capitalize = (str) => str ?  str.charAt(0).toUpperCase() + str.slice(1) : null

const getDisplayName = (user) =>
  Maybe(user?.displayName)
    .orElse(() => user?.profile?.name)
    .orElse(() => user?.email)
    .map(capitalize)
    .withDefault("Anonymous")


const getRawName = (user) =>
  Maybe(user?.displayName)
    .orElse(() => user?.profile?.name)
    .orElse(() => user?.email)
    .withDefault(null)
    .unwrap(x => x)

const caseOne = {
  displayName: "Bob"
}
console.log(getRawName(caseOne));

const caseTwo = {
  profile: {
    name: "Bobby"
  },
  displayName: null,
  email: "bobsmith@outlook.com",
}

console.log(getRawName(caseTwo));

const caseThree = {
  profile: {
    name: null
  },
  displayName: null,
  email: "bobsmith@outlook.com",
}

console.log(getRawName(caseThree));


const caseFour = [{
  profile: {
    name: "Bob Smith"
  },
  displayName: null,
  email: "bobsmith@outlook.com",
}, {
  profile: {
    name: null
  },
  displayName: null,
  email: "rogersmith@outlook.com",
}]

