'use = strict'; // Obviously we are going to use strict mode
// Prettier in an extension which has strong opinion of how the code should actually lool like
// Now if want prettier to behave in a particular way we wanted then we can make another file as .prettierrc

const x = 23;
if (x === 23) console.log('palak');

const calcAge = (birthYear) => 2022 - birthYear; // const calcAge = (birthYear) => 2022-birthYear ;  // arrowParens ==> always(dafault)

// If we write code snippets and then enter we get desired value

console.log('pretty pretty');
console.log(23 + 17);

//  npm install live-server -g ==> means that install live server from npm packages globally

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// We need to find tempreture amplitude ? Tempreture amplitude = highest - lowest
let amplitude = function (t1, t2) {
  const temperatures = t1.concat(t2);

  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== 'number') {
      continue;
    }
    if (temperatures[i] > max) {
      max = temperatures[i];
    }
    if (temperatures[i] < min) {
      min = temperatures[i];
    }
  }
  return max - min;
};
console.log(amplitude(temperatures, []));
console.log(amplitude([1, 2, 3], [4, 5, 6]));

// ########################################################################################################################

// DEBUGGING

// Software bug ===>>> It is an unexpected or unintended behavior

const convKelvin = function () {
  measurements = {
    degree: prompt('Enter tempreture in celsius ?'),
  };
  //return measurements.degree+273;
  // console.log(measurements.degree);
  // console.warn(measurements.degree);
  // console.error(measurements.degree);
  console.log(measurements);
  const kelvin = Number(measurements.degree) + 273;
  return kelvin;
};
console.log(convKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let str ='';
  for (let i = 0; i < arr.length; i++) {
    str+=`... ${arr[i]} degree celcius in ${i+1} days`;
  }
  return str;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));

