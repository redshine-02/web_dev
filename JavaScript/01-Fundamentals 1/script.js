let js = 'Amazing';
if (js == 'Amazing') alert('JavaScript is FUN !!'); 
console.log(40+20+83);

// Value is piece of data , it is the fundamental unit of information

console.log("JONAS");
console.log(23);

// We can store the values in variable
let lastname = "JONAS";  // This is basically declaration of a variable
console.log(lastname);

// For declaring the name of variable we use camel-case notation  // It is not Illegal but it is kind of a convention
// If we are declaring a contant then we can define vaiable name in all capital
// variable name should be self descriptive
/* 1. Variable names cannot start with numbers
   2. Variable name can only contains letter number underscore and dollar sign
   3. Variable names cannot be reserved words though (EXCEPTION : name can be used as vaiable name but this is reserved word)
*/


// DATA TYPES
// In JavaScript we have only two types of values 
// 1. Oject
// 2. Primitive data types

/*
There are  seven types of primitive data types :
1. Number = Used for decimals and integers (let age = 30)
2. String  = Used for text (let n = "Rajesh")
3. Boolean = Used for taking decision (true or false)
4. Undefined = Value taken by variable which is not defined yet (let children) value of the varialbe and type of the variable both undefined
5. Null = Empty value (?????? JAVASCRIPT BUG  == The typeof null is Object)
6. Symbol = Value that is unique and cannot be changed
7. BigInt = Large Integer than Number type can hold
*/

// JavaScript has dynamic typing // That is we don't have to manually define the datatype of variable // Datatypes are determined automatically

// ********* It is actually the value that holds the datatype and not the variable

console.log(typeof true);
console.log(typeof "PALAK");
console.log(typeof 23);
// typeof are basically used to determine the type of value


// Declaration of vaiables 

// ***********************************************************************88

// 1st type is let

// Using let we can re-assign the value of variable that is basically we can mutate the value of variable
let abc = 30;
abc=31
// || No ERROR ABOVE ||

// ***********************************************************************88

// 2nd type is const

// const does not allows us to reassign the values in a variable
// We need to assign an initilization value
const edf = 30;
//edf=31;
// || ERROR ABOVE ||

// ***********************************************************************88

// 3rd type is var 
var let =30;
let ="PALAK"
var let = true;
// Re-assigning and re-declaration ==> Both are possible


// ############ We can also execute a varible without defining the type of variable
last = "SIngh";
console.log(last);
// This works perfectly fine but this is actually a bad practice 
// It is because that is will not create the variable in the so-called scope instead js will create a property on the global object


// Use of OPERATORS
const now = 2037
const ageJonas = now - 1991; // 46
const ageSarah = now - 2018; // 19

console.log(ageJonas,ageSarah); // 46 19 ===> ,separated in console log gives space separated result

// 2**3 = 2^3 = 8
// '+' operator is used for adding operation for numbers and for conacating of strings 

var a ="Palak";
var b ="Singh";
console.log(a+' '+b);

// ASSIGNMENT OPERATORS
let x = 10 + 5 ; // 10+5 // 15
x+=10 ; // x+10 // 25
x*=4 ;  //x*4  // 100
x++;   // x+1 // 101
x--;  // x-1 // 100
console.log(x**2); // x^2 // 100^2 == 100*100 == 10000


// OPERATOR PRECEDENCE //*********** MDN operator precedence/
// All the arithmatic operations are done before comparison operations


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
// TEST DATA 1

// Step 1 =========>>>>>>>>>>
const markWeight = 78 ;
const markHeight = 1.69 ;
const johnWeight = 92 ;
const johnHeight = 1.95 ; 

// Step 2 =========>>>>>>>>>>
const markBMI = markWeight/(markHeight**2);
const johnBMI = johnWeight/(johnHeight**2);

// Step 3 ========>>>>>>>>>>>
if(markBMI>johnBMI) console.log("Mark's BMI is higher than John's BMI")
else console.log("John's BMI is higher than Mark's BMI");

// TEST DATA 2

// Step 1 =========>>>>>>>>>>
const marWeight = 95 ;
const marHeight = 1.88 ;
const johWeight = 85 ;
const johHeight = 1.76 ; 

// Step 2 =========>>>>>>>>>>
const marBMI = markWeight/(marHeight**2);
const johBMI = johnWeight/(johHeight**2);

// Step 3 ========>>>>>>>>>>>
if(marBMI>johBMI) console.log("Mark's BMI is higher than John's BMI")
else console.log("John's BMI is higher than Mark's BMI");

// Template Literals

const fir = "Palak" ; 
const job = "Programmer" ;
const exp = "2 years" ; 

// 1st way 
console.log("I am "+fir+", a "+job+" with an experience of "+exp);

// 2md way
const par = `I am ${fir}, a ${job} with an experience of ${exp}`;
console.log(par);
console.log("Once again");
console.log(`I am ${fir}, a ${job} with an experience of ${exp}`);
console.log("Adding lines in between : ")
console.log(`I am ${fir}, \na ${job} \nwith an experience of ${exp}`);


// *********************************************************************

// TYPE CONVERSIONS ===> is when we manually convert from one type to another

let str = "23";
console.log(str+17);
console.log(Number(str)+17);
let sstr = "Jonas";
console.log(Number(sstr)); // Nan ===>>> Not a number
// Nan is a type of number only 
console.log(typeof Number(sstr));


// TYPE COERSIONS ===> When there are two or more type of values then javascript automatically convert of the value to another

console.log('I am '+23+' years old.');
console.log('23'+'10'+3); // It works as string
console.log('23'-'10'-3); // It works as numbers that is '-' operator triggers numbers



// #################################################################################

// Falsey values ==> are values which are exactly false but becomes false when tried to convert into false

// There are five types of falsey values => 0 , '' , undefined , null , NaN
console.log(Boolean(0)); //false
console.log(Boolean(''));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false

// ****** Any non-empty string value is considered to be a truthy value ****** //
console.log(Boolean("Jonas")); //true

const money = 0 ;
if(money) console.log("XXXXXXXXXX It didn't worked properly XXXXXXXXXXXX");
else console.log("The variable is converted to boolean coercively to meeet the demands")


// #################################################################################


// Something really interesting 

/**
 * 
 * 
 * 
 *   === & == operator are different
 *  This is only is JS that we have two types of equality operators
 * 
 *  1.  === equality is strictly equal that is no type coersion is applied
 *  2.  == equality is vice-versa (loose equalty)
 * 
 * 
 * 
 */


console.log(23===23); //true
console.log('23'===23); //false

console.log(23==23); //true
console.log('23'==23); // true ====> It performs type coersion

let entnum = prompt("Enter a number");

if(entnum===23) console.log("I got 23 , yeah !!!!!!!");
else console.log("Maybe it's not 23");  // Maybe it's not 23

if(entnum==23) console.log("I got 23 , yeah !!!!!!!");
else console.log("Maybe it's not 23");  // I got 23 , yeah !!!!!!! =====> It performed type coersion

// See but it is not a good practice to rely on ==  it's better to convert it into the desired type  

// #################################################################################

// Boolean Logic ===> AND , OR , NOT

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

let dolphin = (96+108+89)/3;
let koala = (88+91+110)/3;

if(dolphin>koala && dolphin>=100) console.log('Dolphin is winner');
else if(dolphin<koala && koala>=100) console.log("Koala is winner");
else if(dolphin==koala && dolphin>=100 && koala>=100) console.log('Match is draw');
else console.log("None wins")



// #################################################################################

// SWITCH CASE STATEMENT

const day = 'monday';

switch(day){
   case 'monday': // This statement is ===> day===monday ===> strict equality
      console.log("It's monday");
      break;
   case 'tuesday':
      console.log("It's tuesday");
      break;
   case 'wednesday':
   case 'thursday':
      console.log("I'm confused");
      break;
   case 'friday':
      console.log("It's friday");
      break;
   case 'saturday':
   case 'sunday':
      console.log("It was supposed to be a weekend");
   default:
      console.log("Enter something valid");
}


if(day==='monday'){
   console.log("It's monday");
}
else if(day==='tuesday'){
   console.log("It's tuesday");
}
else if(day==='wednesday' || day==='thursday'){
   console.log("I'm confused");
}
else if(day==='friday'){
   console.log("It's friday");
}
else if(day==='saturday' || day==='sunday'){
   console.log("It was supposed to be a weekend");
}
else {
   console.log("Enter something valid");
}

// Both the switch statements and if-else statements are equivalent

// What is Statement and What is expression ??
// Expressions are statement that produce values or has value 
2*4 // An expression whose value is 8
1991 // Though it does not have any operation but it has a value
true && false && !true // Holds a boolean value

// In template literals javascript only expect expressions
let naam="Jonas";
let ageme = 29;
console.log(`I'm ${naam} and I am ${ageme} years old !`); // Both variables are holding values that is expressions

// TERNARY OPERATOR
const agep = 18;
agep>=18?console.log("I am adult"):console.log("I am young");
const passport = agep>=18?"Adult":"Young";
console.log(passport);
//Ternary operator produces values ==>it is basically a replcaement of if-else for small block of codes

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

// const bil = 275;
const bil = 430;
const tipp = bil>=50 && bil<=300 ? bil*0.15 : bil*0.2;
console.log(`The bill was ${bil}, the tip was ${tipp}, and the total value ${bil+tipp}`);
