var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);
var browser = "Chrome";//
var browser = "Firefox";//redeclaration
var browser = "Edge";//reassignment
console.log(browser);

var testcase = ["LoginTest", "RegisterTest", "CheckoutTest"];
for (var i = 0; i < testcase.length; i++) {
    console.log("Running Testcase:", testcase[i]);
}
console.log("Loop counter leaked outside:", i)