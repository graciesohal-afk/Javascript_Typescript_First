let Ram_age = 25;
let person_goes_Goa = Ram_age >= 18 ? "Go" : "No Go";
console.log(person_goes_Goa);


let actualStatusCode = 200;
let expectedStatusCode = 400;//source created
let statusCodeMatches = actualStatusCode === expectedStatusCode ? "Match" : "No Match";
console.log(statusCodeMatches);

let environment = "staging";
let baseUrl = environment === "Production" ? "https://api.example.com" : "https://staging.com";
console.log(baseUrl);

let isCI = true;
let browsermode = isCI ? "headless" : "headed";
console.log("Launching Browser in ", browsermode, "mode");

let responseTime = 850;
let sla = 1000;
let responseTimeMeetsSLA = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Response:${responseTime}ms - ${responseTimeMeetsSLA}`);

//Larget number of 2
let a = 100;
let b = 200;
let largest = a > b ? a : b;
console.log("Largest number is:", largest);

//Largest of 3 values
let x = 100;
let y = 200;
let z = 300;
/*
x>y and y>z -x is the greatest
y>z -true(y largest) -false(z largest)
let result_largest_Of3 = (x >= y && x >= z)?"x is the largest":(y >= x && y >= z)?"y is the largest":"z is the largest";
console.log(result_largest_Of3)
*/
let statusCode = 400;
let category = statusCode < 400 ? "Success" :
    statusCode < 300 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}- Category ${category}`);
