//String is a sequence of characters

let str = 'pepcoders'

console.log(str)

//Methods-

//Length of string
console.log('The length of string is' , str.length)

//Extracting a part of a string -->  substring type --java reference

//1. //slice
//slice(start , end+1)

let slicedstr = str.slice(3 , 6) // it is like [start,end) //end par wala element nhi milega
console.log(slicedstr) //cod

let slicedstr1 = str.slice(3 , 7)
console.log(slicedstr1) //code

//Task to extract coder
let slicedstr2 = str.slice(3,9)
console.log(slicedstr2) //coders

//2. //substr
// substr(start , length)
let subString = str.substr(3,4)
console.log(subString) //code

// JavaScript mai string mutable hoti hai

let sayHello = 'Hello Palak'
console.log(sayHello) //Hello Palak

//Replace Method
//replace(value to be replaced, value to be replaced with)

let sayBye = sayHello.replace('Hello' , 'Bye')
console.log(sayBye) //Bye Palak

//ToUpperCase and ToLowerCase

let text1 = 'Hello World'
console.log(text1)
let text2 = text1.toUpperCase()
let text3 = text1.toLowerCase()

console.log('The uppercase string is:',text2)
console.log('The lowercase string is:',text3)

//concatenation (COncat Method)

let firstString = 'Hello'
let secondString = 'Palak'

let concatenation = firstString.concat(" madam ", secondString)
console.log(concatenation)

let concatenation1 = firstString.concat(secondString)
console.log(concatenation1)

let concatenation2 = firstString.concat(secondString , 'madam')
console.log(concatenation2)


//Trim method is used to remove white spaces
let text = '            Hello World          '
console.log(text)

let trimmedtext = text.trim()
console.log(trimmedtext)
