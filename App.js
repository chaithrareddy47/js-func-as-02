//difference b.w var let and const

console.log(a); // undefined because of hoisting
var a = 10;
console.log(a);

// can be rredeclare and reinitalized
var a = 20;

a = 40;
console.log(a);

//functional scope
function variableVar() {
  console.log(b); //undefined bc0z here also hoisted
  var b = 30;
}

console.log(b); // cnnot acess outside bcoz its functional sscope
