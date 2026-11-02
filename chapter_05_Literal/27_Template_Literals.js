let language = "Javascript";
console.log("I'm learning now", language);
console.log(`I'm learning now  ${language}`);

let fullName = "Gracie";
console.log(fullName);
console.log('${fullName}'); // This will print the literal string, not the variable value

console.log(`Welcome to the world of ${language}, ${fullName}!`);

//api
let env = "development";
let userId = 324
const baseURL = "https://api.example.com";
console.log(`${baseURL}/users/${userId}`);


//webtables:
const rowIndex = 3
const colName = "email"
const result = `[data-row = "${rowIndex}"],[data-col"${colName}"`;
console.log(result);
//await page.locator(result).click();

//logs
const testName = "Login Test";
const status = "passed";
const duration = 2.3
console.log(`${testName} has status:${status} and executed for ${duration} minutes`);


