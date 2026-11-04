let year = 2026
if (year % 4 !== 0 || (year % 100 !== 0 && year % 400 !== 0)) {
    console.log("Its not a Leap year")
}
else {
    console.log("Its a Leap year")
}