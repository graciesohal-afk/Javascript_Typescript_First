const baseURL = "https://google.com/";
console.log("baseURL:", baseURL);
// baseURL = "https://facebook.com/"; // cannot reassign a const variable

const name = "pending";
{
    const name = "done"; // block-scoped const can be redeclared in a different scope
    console.log("inside the block name:", name);
}

function say() {
    const name = "gracie";
    console.log("inside the function:", name);
}

if (true) {
    const name = "Hari";
    console.log("inside if block:", name);
}

for (let i = 0; i < 3; i++) {
    const name = "Hari";
    console.log("inside for block:", name);
}

console.log("Outside all blocks:", name);
say();
console.log("Outside all blocks:", name);
