//Working with Functions in Javascript
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//Working with Anonymous Functions
let sub = function (a, b) {
    return a - b;
}
console.log(sub(60, 20));

//More Simplified Code
let mul = (a, b) => a * b;
console.log(mul(10, 20));

//Working with Var.Let & Const
//Var Scope Global & Function Scope
var a = 10;
console.log(a);
function add() {
    var a = 20;
    console.log(a);
}
add();
console.log(a);

//Let Scope Global & Function Scope
let b = 10; //let can be used only in global scope
console.log(b);
function sub() {
    let b = 20;
    console.log(b);
}
sub();
console.log(b);

//Const Scope Global & Function Scope
const c = 10;
console.log(c);
function mul() {
    const c = 20;
    console.log(c);
}
mul();
console.log(c);

