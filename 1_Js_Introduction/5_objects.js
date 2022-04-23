// in JS objects are basically key value pair

//to declare an obj

let obj = {} //object declaration

let person = {
    name : 'Palak', //here name is the key and string(Palak) is the value
    age : '19',
    phone : 876543210

}
console.log(person)

let cap = {
    firstname : 'Steve',
    lastname : 'Rogers',
    friends : ['Bucky' , 'Tony' , 'Dr Banner'],
    age : 102,
    isAvenger : true,
    address : {
        state : 'Manhattan',
        city : 'New York'
    },

    sayHi: function fn(){
        console.log('Captain says hi')
    }

}
console.log(cap)

console.log(cap.firstname) //Dot notation //accesing a property of an object
console.log(cap['firstname']) // bracket notation

console.log(cap.lastname)
console.log(cap.age)
//console.log(cap.sayHi) ----> [Function: fn]
console.log('My best friend is' , cap.friends[0])
console.log(cap.address.city)
cap.sayHi()

//Loops --> For in loop
for(let key in cap){
    console.log("key : " , key , 'Value :' , cap[key])
}

cap.isAvenger = false //update a property from an object

cap.movies = ['Age of Ultron' , 'First Avenger '] //add new property to an object

delete cap.age // delete a property of an object

for(let key in cap){
    console.log("key : " , key , 'Value :' , cap[key])
}
