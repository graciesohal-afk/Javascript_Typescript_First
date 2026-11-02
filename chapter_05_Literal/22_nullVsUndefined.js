// undefined means a value has not been assigned (or is missing).
let undefinedValue;
console.log(undefinedValue); // undefined

// null is assigned intentionally to represent "no value".
let nullValue = null;
console.log(nullValue); // null

// JavaScript gives unassigned variables and missing object properties undefined.
const person = {};
console.log(person.age); // undefined

// A function without a return statement also produces undefined.
function doNothing() { }
console.log(doNothing()); // undefined

// null and undefined are different values.
console.log(nullValue === undefinedValue); // false
console.log(nullValue == undefinedValue); // true (loose equality treats them as equal)

// typeof null is a historical JavaScript quirk; null is not an object value.
console.log(typeof nullValue); // "object"
console.log(typeof undefinedValue); // "undefined"

// Use null when explicitly clearing or initializing a value; use undefined to
// represent an absent or not-yet-assigned value.
