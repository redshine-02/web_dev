// For js development we use strict mode
'use strict';
// This strict mode helps us to closely admire our code that is look after the error which even the compiler overlooks
let driverslicense = false;  // we cannot re-assign to const *********   REMEMBER   *********
const passed = true;

if(passed) driverslicense=true;
if(driverslicense) console.log("I got my driving license");
// If we don't use the strict mode then nothing would have printed and it would take us a while to figure out the error


// ####################################################################################################################

// FUNCTIONS ==> it works on dry principle ==> DO NOT REPEAT YOURSELF

//Non-paramaterized function ====> These function is used when we need to execute some block of again again n again
function logger(){
    console.log("Hello there");
}

logger();
logger();
logger();

function fruitshop(apples,oranges){
    console.log(`Give me a juice of ${apples} apples and ${oranges} oranges`);
}

fruitshop(2,3);
fruitshop(2.9,"papa"); // Give me a juice of 2.9 apples and papa oranges // Seems totally wrong 

// Function declaration and Function expressions

// Function Declaration
function calcAge1(birthYear){
    return 2021-birthYear;
}

// Function expression
const calAge2 = function(birthYear){
    return 2021-birthYear;
} // Function without name are called anonymous function

console.log(calcAge1(2002),calAge2(2002)); // Both the function returns the same value

// ####################################################################################################################

// ARROW FUNCTION ==> This seems to be like function expression but here we get rid of {}

const calAge3 = birthYear => 2021-birthYear;

console.log(calAge3(2002));

// calculating years of retirement

const yearLeft = birthYear =>{
    const curr = 2022-birthYear;
    const years = 65-curr;
    return years;
}

console.log(yearLeft(2002));

const yearLeftName =( birthYear , firstN) =>{
    const curr = 2022-birthYear;
    const years = 65-curr;
    console.log(`${firstN} retires after ${years} years`);
}

yearLeftName(2002,"Palak");

// Nested Functions

let pieces = function(fruit){
    return fruit*4;
}

function fruitshopbar(apples,oranges){
    console.log(`Give me a juice of ${pieces(apples)} apples and ${pieces(oranges)} oranges`);
}

fruitshopbar(2,3);

// Understanding the complete structure of function 

/**
 * In the function prototype : function defination consists of function names and parameters in the bracket
 * In the function call or function invoking : we have arguments in the bracket
 * 
 */

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/


const calcAvg = (a,b,c) =>{
    return (a+b+c)/3;
}

function checkWinner(d1,d2,d3,b1,b2,b3){
    const davg = calcAvg(d1,d2,d3);
    const bavg = calcAvg(b1,b2,b3);
    if(davg>=bavg*2){
        console.log(`Dolphins wins (${davg} vs. ${bavg})`);
    } 
    else if(bavg>=davg*2){
        console.log(`Koalas wins (${bavg} vs. ${davg})`);
    }
    else{
        console.log("No team wins");
    }
}

checkWinner(44,23,71,65,54,49);
checkWinner(85,54,41,23,34,27);



// ####################################################################################################################

//            ARRAYS

// What we studied earlier that const variables cannot be mutated but const array values can be mutated
// As a whole we cannot re-assign another array to this array
// Another interesting fact is that we Array is not the collection of homogenous datatypes
// We can have an array which consists of multiple types of datatypes



const friend1 = "Jonas";
const friend2 = "Michael";
const friend3 = "Jordan";
// A tedious task

const friend = ["Jonas","Michael","Jordan"];

console.log(friend1,friend2,friend3);
console.log(friend[0],friend[1],friend[2]);

friend[0]="Jake"; // This is possible and correct
//friend=["Maya","Siya"];// This is not possible because we have declared friend as a const variable so re-assignation is not possible
console.log(friend[0],friend[1],friend[2]);

const info = ["Palak Singh",21,friend]; // We have an array which has string, number and array
console.log(info);


// ####################################################################################################################

// Array methods

// PUSH METHOD ===> is basically adding elements at the end
const friends = ["Jonas","Michael","Jordan"];
console.log("Before push method "+friends.length);
friends.push("Jake");
console.log(friends);
console.log(friends.length);

// UNSHIFT METHOD ===> is basically adding elements at the front
console.log("Before unshift method "+friends.length);
friends.unshift("John");
console.log(friends);
console.log(friends.length);

// POP METHOD ===> is basically removing elements from last
console.log("Before pop method "+friends.length);
friends.pop();
console.log(friends);
console.log(friends.length);

// SHIFT METHOD ===> is basically removing elements from the first
console.log("Before shift method "+friends.length);
friends.shift();
console.log(friends);
console.log(friends.length);


// To get the index of a particular string
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("Palak")); // As it is not present it returns -1

console.log(friends.includes("Michael"));
console.log(friends.includes("Palak"));

if(friends.includes("Jonas")){
    console.log("You have a friend named Jonas");
}