let retryCount = 0
//let retryCount = 1 //reassignment (Not possible, will throw an error)
retryCount = retryCount + 1;//0+1=1
retryCount = retryCount + 1;//1+1=2
console.log("retryCount:", retryCount); //2 (output is reassigned value)
//let is a block scope
//{} 
//if{}
//for(){}
//functionname(){}
let testStatus = "Pending";
if (testStatus === "Pending") {
    let executionTime = 2000;
    console.log("Inside the if block:", executionTime);//2000 result
}
let executionTime = 5000;
console.log("Inside the block:", executionTime);//5000 result

for (let i = 0; i < 11; i++) {
    let executionTime = 1000;
    console.log("Inside the block:", executionTime);//1000 result
}

console.log("Outside all blocks", executionTime);//(Should get an error undefined.)