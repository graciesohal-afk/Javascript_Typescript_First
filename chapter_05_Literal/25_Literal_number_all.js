// Decimal integer and floating-point literals
const integer = 42;
const decimal = 3.14;
const leadingDecimalPoint = 0.5;
const trailingDecimalPoint = 5.;

// Exponent notation
const largeNumber = 1.5e6;
const smallNumber = 2.5e-4;

// Binary, octal, and hexadecimal literals
const binary = 0b1010;
const octal = 0o17;
const hexadecimal = 0xFF;

// Numeric separators improve readability
const readableNumber = 1_000_000;
const readableBinary = 0b1010_0001;
const readableHexadecimal = 0xFF_FF;

// BigInt literals represent integers larger than Number can safely represent
const bigInteger = 9007199254740993n;
const bigBinary = 0b1010n;
const bigOctal = 0o17n;
const bigHexadecimal = 0xFFn;

console.log("Integer:", integer);
console.log("Decimal:", decimal);
console.log("Leading decimal point:", leadingDecimalPoint);
console.log("Trailing decimal point:", trailingDecimalPoint);
console.log("Large number:", largeNumber);
console.log("Small number:", smallNumber);
console.log("Binary:", binary);
console.log("Octal:", octal);
console.log("Hexadecimal:", hexadecimal);
console.log("Number with separators:", readableNumber);
console.log("Binary with separators:", readableBinary);
console.log("Hexadecimal with separators:", readableHexadecimal);
console.log("BigInt:", bigInteger);
console.log("Binary BigInt:", bigBinary);
console.log("Octal BigInt:", bigOctal);
console.log("Hexadecimal BigInt:", bigHexadecimal);

// A sign is an operator, not part of the numeric literal.
const negativeNumber = -42;
console.log("Negative number:", negativeNumber);
