console.log("" == 0)//true
console.log(0 === 0)//true
//a==b, b==c does not necessarily mean a==c //transitive property does not hold for loose equality  
console.log("" == "0")//true
console.log("0" == 0)//true
console.log("" === 0)//false
console.log("0" === 0)//false
console.log("" === "0")//false
console.log("0" === "0")//true
console.log(5 == false)//false
console.log(null == false)//false
console.log(undefined == false)//false
console.log(null == undefined)//false
console.log(null === undefined)//false