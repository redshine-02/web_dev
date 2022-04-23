console.log("line number 1", varName);
var varName = 10;
console.log("line number 3", varName);
function b(){
    console.log("line number 5", varName);
    varName = 20;
    console.log("line number 7",varName);
}
b();
console.log("line number", varName);
function s(){
    console.log("line number 11", varName);
    var varName = 30;
    b();
    console.log("line number 13",varName);
}
s();
console.log("line number 16", varName);