const baseURL = "https:google.com/";
const baseURL = "https:google.com/";//no redeclartion possible with const
baseURL = "https:facebook.com/";//no reassignment possible with const

const name = "pending"
{
    const name = "done"//no redeclartion possible with const
    console.log("inside the block name:", name);//done                
}

function say() {
    const name = "gracie"
    console.log("inside the function:", name);//gracie;

}
if (true) {
    const name = "Hari"
    console.log("inside if block:", name);//Hari
}
for (let i = 0; i < 11; i++) {
    const name = "Hari"
    console.log("inside  for block:", name);//Hari
}
console.log("Outside all blocks", name);//gracie

say()
console.log("Outside all blocks", name);//pending
