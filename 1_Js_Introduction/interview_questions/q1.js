console.log("varname",varname);
var varname;
console.log("varname",varname);
varname = "Captain America";
console.log("varname",varname);
fn();
function fn(){
    console.log("fn is being called");
}
fn();
fnContainer();
var fnContainer = function(){
    console.log("fnContainer  is being called");
}
fnContainer();
