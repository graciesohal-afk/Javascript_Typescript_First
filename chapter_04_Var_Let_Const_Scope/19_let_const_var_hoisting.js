console.log(v)//hoisted to the top of the program and initialized with undefined
console.log(Hello)
console.log(Hello)
console.log(Hello)
console.log(Hello)
console.log(Hello)
console.log(Hello)
console.log(Hello)
console.log(c)//hoisted to the top of the program but not initialized
//RefrenceError: Cannot access 'c' before initialization
console.log(str)//const is hoisted to the top of the program but not initialized

let c = 889;
const str = "hello"
var v = true

