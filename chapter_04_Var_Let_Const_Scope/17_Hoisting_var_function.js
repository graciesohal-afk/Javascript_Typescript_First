getStatus()
function getStatus() {
    console.log(status)//hoisted and initialized - undefined
    var status = "pending";
    console.log(status)//pending
    var status = "assigned";
    console.log(status)


    if (true) {
        console.log("block scope:", status)
        var status = "fixed";
        console.log("block scope:", status)
    }

}
