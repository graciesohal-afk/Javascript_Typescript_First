// JavaScript identifier examples

// 1. Start with a letter, underscore (_), or dollar sign ($).
let studentName = "Maya";
let _score = 95;
let $price = 19.99;

// 2. An identifier cannot start with a digit.
// let 2ndPlace = "Sam"; // Invalid: starts with a digit.
let place2 = "Sam"; // Valid: digits are allowed after the first character.

// 3. After the first character, use letters, digits, underscores, or $.
let user_id2 = "u102";
let $total3 = 42;

// 4. Spaces are not allowed inside an identifier.
// let first name = "Maya"; // Invalid: the space ends the identifier.
let firstName = "Maya"; // Use camelCase instead.

// 5. Characters such as hyphens, @, and # are not allowed in identifiers.
// let user-name = "Maya"; // Invalid: '-' is treated as an operator.
// let @user = "Maya";     // Invalid character.
// let #user = "Maya";     // Invalid outside special private-field syntax.
let user_name = "Maya"; // Use _ or $ instead of punctuation.

// 6. Reserved keywords cannot be used as variable names.
// let class = "Biology"; // Invalid: "class" is a keyword.
// let return = 10;       // Invalid: "return" is a keyword.
let className = "Biology";

// 7. Identifiers are case-sensitive; these are two different names.
let name = "Maya";
let Name = "Jordan";
console.log(name, Name);

// 8. Unicode letters are allowed in identifiers.
let café = "coffee";
let π = 3.14159;
console.log(café, π);

// 9. There is no fixed identifier-length limit in the language.
// Engines still have practical limits based on memory and implementation.
let thisIsAnExampleOfAVeryLongIdentifierNameThatJavaScriptAllows = true;
console.log(thisIsAnExampleOfAVeryLongIdentifierNameThatJavaScriptAllows);