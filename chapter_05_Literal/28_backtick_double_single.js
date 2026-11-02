// Single quotes and double quotes both create ordinary string values.
const singleQuoted = 'Hello, JavaScript!';
const doubleQuoted = "Hello, JavaScript!";
console.log(singleQuoted);
console.log(doubleQuoted);

// The two quote styles work the same. Choose the one that makes the text easier to read.
const sentenceWithSingleQuote = "I'm learning JavaScript.";
const sentenceWithDoubleQuote = 'She said, "Hello!"';
console.log(sentenceWithSingleQuote);
console.log(sentenceWithDoubleQuote);

// Escape a quote when the string uses the same quote style around it.
const escapedSingleQuote = 'It\'s a string.';
const escapedDoubleQuote = "She said, \"Hello!\"";
console.log(escapedSingleQuote);
console.log(escapedDoubleQuote);

// Backticks create template literals. They can include expressions with ${...}.
const language = "JavaScript";
const learner = "Gracie";
console.log(`I'm learning ${language}.`);
console.log(`Welcome, ${learner}!`);

// Single- and double-quoted strings do not substitute variables.
console.log('Welcome, ${learner}!');
console.log("Welcome, ${learner}!");

// Template literals can span multiple lines without inserting \n manually.
const message = `Hello, ${learner}!
Today we are learning about strings in ${language}.`;
console.log(message);

// In a template literal, use a backslash to include a literal backtick.
const backtickExample = `This string contains a backtick: \``;
console.log(backtickExample);
