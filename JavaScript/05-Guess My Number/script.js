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
/**
 * What are the steps I need to follow?
 * 1. Get the guessing number
 * 2. Check for the click on the check button => if not entered anything then change the message to Enter something
 * 3. Take the number as given or entered 
 * 4. If(given===secret) ==> change the message to "You Won"
 * 5. If(given>secret) ==> change the message to "Too High"
 * 6. If(given<secret) ==> change the message to "Too Low"
 * 
 * 7. I need to add the score functionality
 */

//Step 1
let secret = Math.trunc(Math.random()*20)+1;
//console.log(secret,typeof secret);
//document.querySelector('.number').textContent=secret;
let max = 0 ;
function displayMessage(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
  //Step 3
  let ss = Number(document.querySelector('.score').textContent);
  console.log('************'+ss);
  let given = Number(document.querySelector('.guess').value);
  console.log(given,typeof given);
  //Step2
  if(given===0){
    //document.querySelector('.message').textContent="Enter Something";
    displayMessage("Enter Something");
  }
  //Step 4
  else if(given===secret){
    //document.querySelector('.message').textContent="You Won";
    displayMessage("You Won");
    max = Math.max(max,ss);
    document.querySelector('.number').textContent=secret;
    document.querySelector('.highscore').textContent=max;
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width='30rem';
  }
  //Step 5 & Step 6
  else{
    if(ss>0){
    //document.querySelector('.message').textContent=given>secret?"Too High":"Too Low";
    displayMessage(given>secret?"Too High":"Too Low");
    ss--;
    }
    else{
    //document.querySelector('.message').textContent="You Lost";
    displayMessage("You Lost");
    document.querySelector('body').style.backgroundColor= 'rgb(255,0,0';

    }
  }
  document.querySelector('.score').textContent=ss;
});

document.querySelector('.again').addEventListener('click',function(){
    secret = Math.trunc(Math.random()*20)+1;
    //document.querySelector('.message').textContent='... Start guessing';
    displayMessage('... Start guessing');
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor= 'black';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem';
})