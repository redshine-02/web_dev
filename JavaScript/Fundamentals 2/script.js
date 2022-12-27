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

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

function tipCalc(bi){
    if(bi>=50 && bi<=300){
        return bi*0.15;
    }
    else{
        return bi*0.2;
    }
}

const tipss = [];
const billtip = [];

function answer(val){
    let v = tipCalc(val);
    tipss.push(v);
    billtip.push(v+val);
}
answer(125);
answer(555);
answer(44);
console.log(tipss);
console.log(billtip);


// ####################################################################################################################

// OBJECTS

// In javascript we can group different types of dat both using arrays and objects
// But in objects we add the data with properties and the values are not ordered
// So we use arrays when we need a more ordered arrangement of data 
// We use object when we want to access elements more in an unordered way

const palakInfo = {
    firstName : 'Palak',
    lastName : 'Singh',
    birthYear : 2002,
    age : 2022-2002,
    friends : ["Jake","John","James"]
};

console.log(palakInfo);

// Now how can we access the properties of object

// Accessing the property of an object can be done in two ways
// 1. Dot Notation ==> object.property gives the value
// 2. Bracket Notation ==> object[property in the form of string]

// If we try to access a property which we have not defined then is ***** undefined *****

// 1st Notation = DOT
console.log(palakInfo.firstName , palakInfo.lastName , palakInfo.age , palakInfo.friends);
// 2nd Notation = BRACKET
console.log(palakInfo["firstName"] , palakInfo["lastName"] , palakInfo["age"] , palakInfo["friends"]);

const namess = "Name";
console.log(palakInfo["first"+namess]); // In this way we can only through bracket and not through dots

const interestIn = prompt("What do you want to know about?");
console.log(palakInfo[interestIn]); 
console.log(palakInfo.interestIn); // This wil show undefined because we cannot access the properties in this notation

if(palakInfo[interestIn]){ // This involves type coersion and the undefined value shows falsey value
    console.log("Property exists");
}
else{
    console.log("Wrong input")
}

// Chanllenge
// To print ===> Palak has 3 friends and her best friend is "Jake"
console.log(`${palakInfo.firstName} has ${palakInfo.friends.length} friends and her best friend is ${palakInfo.friends[0]}`); // Palak has 3 friends and her best friend is Jake

palakInfo.hasDriverLicence = true ; // Adding another property

console.log(palakInfo); 

palakInfo.calAge = function(){
    console.log(this)
    return 2022-this.birthYear;  // this ===> object name property is defined in which 
}

console.log(palakInfo);

console.log(palakInfo.calAge(2002));
console.log(palakInfo['calAge'](2002)); //IMPORTANT to know

console.log(palakInfo.calAge());
console.log(palakInfo['calAge']()); //IMPORTANT to know

console.log(`${palakInfo.firstName} has ${palakInfo.hasDriverLicence ? 'a':'no'} driving licence`);

// So from the methods on arrays we understood that arrays are also object ===> remember arr.push ==> basically we are implementing one of the property function of the object array
// If we check typeOf of an array then ==> it is object

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/


const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95
};

const mark = {
    fullName : "Marks Miller",
    mass : 78,
    height : 1.69
};

john.bmi = function(){
    return this.mass/(this.height **2);
}

mark.bmi = function(){
    return this.mass/(this.height **2);
}

john.bmi>mark.bmi?console.log(`${john.fullName}'s BMI (${john.bmi()}) is higher than ${mark.fullName}'s BMI (${mark.bmi()})`):console.log(`${mark.fullName}'s BMI (${mark.bmi()}) is higher than ${john.fullName}'s BMI (${john.bmi()}))`);

// **************** IMPORTANT if we have defined a function on variable then it's necessary to put paranthesis after that otherwise the function will be printed


// ####################################################################################################################

// LOOPS

// FOR-LOOPS

for(let rep = 1 ; rep<=10 ; rep++){
    console.log(`Lifting weight repeatatively ${rep}`);
}

const jonasInfo = ["Jonas","Schemmedtmann",2022-2002,"teacher",["Michael","James","Jake"],true];

const types = []

for(let i = 0 ; i<jonasInfo.length ; i++){
    console.log(jonasInfo[i],typeof(jonasInfo[i]));
    types[i]=typeof(jonasInfo[i]); // A really interesting fact ===> It works as push ===> NO ERROR 
}

console.log(types);

// ####################################################################################################################

// JUMP STATEMENTS ==> Two Types ==> 1. continue 2. break
console.log("JUMP STATEMENTS \n\n");
for(let i = 0 ; i<jonasInfo.length ; i++){
    if(typeof jonasInfo[i] =='string') continue;
    else{
    console.log(jonasInfo[i],typeof(jonasInfo[i]));
    }
}


// For removing the decimal part , we use ======>>>> Math.truncate()


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const b = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52] ;
const t = [] ;
const tot = [] ;

let calculate = function(bill){
    if(bill>=50 && bill<=300){
        return bill*0.15;
    }
    return bill*0.2;
}

for(let i = 0 ; i<b.length ; i++){
    t[i]=calculate(b[i]);
    tot[i]= b[i]+t[i];
}

console.log(t);
console.log(tot);

let arrAvg = function(ar){
    let sum = 0 ;
    for(let i = 0 ; i<ar.length ; i++){
        sum+=ar[i];
    }
    return sum/ar.length;
}

console.log(arrAvg(b));
console.log(arrAvg(t));
console.log(arrAvg(tot));




















