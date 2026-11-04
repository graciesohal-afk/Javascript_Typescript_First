if ("Hello") {
    console.log("String is truthy");
}
if ("11") {
    console.log("Number is truthy");
}
if ({}) {
    console.log("Empty Object is truthy");
}
if ([]) {
    console.log("Empty Array is truthy");
}
if (0) {
    console.log("Zero is truthy");
}
if ("") {
    console.log("Empty String is falsy");
}
if (null) {
    console.log("Null is falsy");
}
if (undefined) {
    console.log("Undefined is falsy");
}
if (-0) {
    console.log("Negative Zero is truthy");
}
if (NaN) {
    console.log("NaN is falsy");// not a number but returns number

}