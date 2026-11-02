var a1 = 100;//global scope
console.log("Global scope:", a1)//100

function printHello() {

}
printHello()
console.log("outside function block:", a1)//100- global value
