
// Immediately Invoked Function Expression 


// why there is need of iife as if we want if my appliction starts we want immediately invoke the functions 
// examples to connect the databases 
// the main reason of iife function that we did not want to pollute the function from all the global variables  .


// this is the normal function expression 

// var any = function() {
//     console.log(`this is function expression  `);
// }

(
function chai (){
    console.log("this is function statement");
}) ()  ; //  when the function is enclosed in  parenthesis and its called  by itself  () in end its an iife function 

// there n problem occurrs in iife function when we want to execute two function one after  another as one not gets over
// in order to execute we have to end the proir with semicolon 

// we can also use arrow function in js as iife function

((name )=>{
    console.log(`Name of the person is ${name} `);
}) ("Abhishek kumar "); 

 // semicolon is important at the end  

 // console.log("hii function executed ");