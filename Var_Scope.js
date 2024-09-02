// Global Scope variable

var a = 10
let b = 20
const c = 30

if (true) {
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("-------");


// Local Scope variable 

if (true) {
    var d = 40
}
console.log(d);
