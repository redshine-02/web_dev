//Normal Function

function sayHi(){
    console.log('function said hi')
}//function declaration

sayHi()//finction invocation --- function call

//Parameters in functions

function add(a , b){//a and b are parameters
    console.log('The addition is',a + b)
}

add(2 , 3) // 2 and 3 are arguments

//multiply

function mul(a , b){//a and b are parameters
    console.log('The multiply is',a * b)
}

mul(2 , 3) // 2 and 3 are arguments

//divide

function div(a , b){//a and b are parameters
    console.log('The division is',b / a)
}

div(2 , 3) // 2 and 3 are arguments

//function as first class citizens
// js class aur variable mai discrimination nhi karti

let sayHi=function(){//function ko naam nhi diya --- aise function ko anonymous function bolte hai
    console.log('Hi')
} //function expression

sayHi()//variable ko call lagaya --- A function which behaves as a variable
//Yeh KAMAAL ki baat lagi mujhe // we are calling this later wherever we want

//IIFE (Immediately invoked function expression)

let add = (function(a , b){
    return a+b
})(10 , 20)

console.log(add)