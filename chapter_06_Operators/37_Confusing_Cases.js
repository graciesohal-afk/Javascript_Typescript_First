// == allows type conversion; === compares without converting types.

console.log("1" == 1) // true: the string is converted to a number
console.log("1" === 1) // false: the types are different

// Empty strings and whitespace convert to zero in numeric comparisons.
console.log("" == 0) // true
console.log(" " == 0) // true
console.log("" === 0) // false

// Booleans convert to numbers: true becomes 1 and false becomes 0.
console.log(true == 1) // true
console.log(false == 0) // true
console.log(false === 0) // false
console.log("0" == false) // true: both sides are converted to zero
console.log("0" === false) // false

// An empty array converts to an empty string, then to zero when needed.
console.log([] == 0) // true
console.log([] == false) // true
console.log([] === 0) // false
console.log([] === false) // false

// null and undefined are loosely equal only to each other.
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(null == 0) // false
console.log(undefined == 0) // false

// NaN is unequal to every value, including itself.
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(Number.isNaN(NaN)) // true

// Objects are compared by identity, not by their contents.
const firstArray = []
const secondArray = []
console.log(firstArray == secondArray) // false: different arrays
console.log(firstArray === secondArray) // false: different arrays
console.log(firstArray == firstArray) // true: the same array
console.log(firstArray === firstArray) // true: the same array

// Prefer === unless you specifically need JavaScript's type conversion.
