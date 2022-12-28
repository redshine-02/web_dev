'use strict';
/*
                    What is DOM?
                    1. DOM stands for Document Object Model. It is basically structured representation of HTML elements. 
                       It allows us to access the HTML elements and styles and manipulate. 
                    2. It very much provides us the ability to interact with the HTML elements.
                    
                    
DOM is basically the connection between the javascript and html => A DOM(Document) is automatically created by the browser once it is loaded

                    ===> document.querySelector(.className);
                    ===> document.querySelector(#classID);


DOM is not included in JavaScript ==> DOM is provided by the web API ==> using javaScript we can interact with the web browser api and eventually DOM

So DOM is automatically provided by web browser APIs


*/

// console.log(document.querySelector('.message')); // This prints the html element tag with class name message
// console.log(document.querySelector('.message').textContent); // This prints the content of the tag

// //document.querySelector('message').textContent='Correct Answer !!';
// let a = document.querySelector('.number').textContent=14;
// let b = document.querySelector('.number').value=14; // Works same .textContent and .value
// console.log(a,typeof a);
// console.log(b,typeof b);

//              Working on our real application

// Firstly we would be using listeners ==> what I can recall , listener basically listens the particular element ist is attached to
let a = 12;
document.querySelector('.check').addEventListener('click', function () {
  // Here the function is the event handler
  while (document.querySelector('.guess').value != a) {
    console.log(document.querySelector('.guess').value);
    document.querySelector('.label-score').value--;
  }
  console.log(document.querySelector('.guess').value);
  document.querySelector('.label-highscore').value =
    document.querySelector('.label-score').value;
  document.querySelector('.message').textContent = 'Correct Answer !!' + a;
});
