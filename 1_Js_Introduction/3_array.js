//Array provides you an ordered collection of elements

let arr = [];

let cars = [ 'ferrari' , 2, true , null]

//console.log('This is a car array' , cars)

let cars2 = [ 'ferrari' , 'Jaguar' , 'BMW' , 'Tesla']

//Accessing the elements of an array
console.log(cars2[0]) // Jaguar //Same the index starts from 0 and ends at length-1
console.log(cars2[1]) 
console.log(cars2[2])
console.log(cars2[3])

// Replace elements of an array

cars2[2] = 'Porche' //2nd index of cars2 will be replaced
console.log(cars2)

//Add a new element to an array
// cars2[4] = 'Mercedes'
// console.log(cars2)

// cars2[6] = 'Lamborghini'
// console.log(cars2) //[ 'ferrari', 2, true, null, 'Mercedes', <1 empty item>, 'Lamborghini' ]


// Array methods

// pop method(): this method removes the last element of the aray

cars2.pop()
console.log(cars2)

//push method(): this methods add an element at the end of the array
cars2.push('Rolls Royce')
console.log(cars2)

//shift method(): this method is used to remove an element from the beginning
cars2.shift()
console.log(cars2)

//unshift method(): this method is used to add an element from the beginning
cars2.unshift('Cheverolt')
console.log(cars2)

//to find length of an array
console.log(cars2.length)

//2D array
let matrix = [
    [1 ,2 ,3],
    [4 ,5 ,6],
    [7 ,8 ,9]
]
console.log(matrix[0][0]) //1
console.log(matrix[2][1]) //8

//join and split

















