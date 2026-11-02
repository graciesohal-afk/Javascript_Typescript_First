// var can be redeclared or reassigned
var a = 10;
console.log("Global Scope:", a);

function printHello() {
    console.log(a);
    var a = 20;//local scope
    console.log("Inside Function:", a);
}

if (true) {
    var a = 30;//local scope
    console.log("Inside If Block:", a)//30
}

for (var a = 50; a < 60; a++) {
    console.log("Outside the for loop:", a)//60

}
printHello();
console.log("Global Scope:", a);
var a = 70;
console.log("Global Scope:", a);
var a = 100;
console.log("Global Scope:", a);