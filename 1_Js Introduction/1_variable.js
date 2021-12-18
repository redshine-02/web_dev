//variable declaration

//var,let,const

// var a;//variable will be intialized with undefined
// console.log(a)

// var a=2
// console.log(a)//prints 2 on the terminal
// a='I am a string'
// console.log(a)
// a=true
// console.log(a)

// //Datatypes in Javascript - number,string,boolean,null,undefined
// var b=2.3 //as a number
// var c='d' // as a string
// var d='I am String'// as a string

//var has some problems

//1st Problem with var - Redeclaration
// var b='hello'
// console.log(b)//hello

// var b='bye'
// console.log(b)//bye

//overcoming Redclaration
//use let keyboard

// let b='hello'
// console.log(b)//hello

// b='bye'//re assigning


// console.log(b)//bye

//loops

//for loop
//prime number

// var flag= true

// var num = 13

// for(var i=0 ; i*i <=num ; i++){
//     if(num%i ==0){
//         falg=false
//         break;
//     }
// }
// if(flag== true){
//     console.log('Number is Prime')
// }
// else{
//     console.log('Number is not ptime')
// }

//2nd Proble with var - Scoping

// if(10%2){
//     var a=2 //var keyword is function scoped
//     console.log(a)
// }
// console.log(a)

// NO ERROR FOR THIS

// if(10%2){
//     let a=2 //let keyword is function scoped
//     console.log(a)
// }
// console.log(a)//error aayega ---- a is not defined

const a = 2 // const has to be initialised
console.log(a)

a=true
a='I am a String'// error aayega ---- reallocation not possible