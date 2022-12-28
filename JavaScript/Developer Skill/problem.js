// Problems

// Problem 1 :
// How to check if a value is a number in a javascript?
console.log("**************************** Whether a number");
const num = 23;
typeof(num)=='number'?console.log("It is a number"):console.log("It is not a number");

// Problem 2 :
// How to check if a value is a string in a javascript?
console.log("**************************** Whether a string");
const text = 23;
typeof(text)=='string'?console.log("It is a string"):console.log("It is not a string");

// Problem 3 :
// How to reverse a number
console.log("**************************** Reverse a number");
var n = 23;
let ans = 0 ;
while(n!=0){
    let r = n%10;
    n=n/10;
    ans=ans*10+r;
}
console.log(`The reversed number is ${ans}`);

// Problem 4 :
// How to reverse a string
console.log("**************************** Reverse a string");
let s = "23";
let str = 0 ;
let i = 0 ; 
while(i!=s.length){
    str=s[i]+str;
    i++;
}
console.log(`The reversed string is ${str}`);

// Problem 5 :
// How to reverse an array 
console.log("**************************** Reversing an array");
let arr1 = [10,20,30,40,50];
let arr2 = ["a","b","c","d","e"];
let a = 0 ;
let b = arr1.length-1 ;
console.log(arr1);
while(a<=b){
    let temp = arr1[a];
    arr1[a]=arr1[b];
    arr1[b]=temp;
    a++;
    b--;
}
console.log(arr1);