
// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// } 
 //the function doesn't return anything as num will be undefined 
 const num = addTwoNumbers(5,3);
//console.log(num);


function addTwoNumbers(number1 , number2) { // parametrs are those which we define at the time definig the function 
     return   number1 + number2 ;
    } 
    // here the functions returns so num1 will not be undefined 
const num1 = addTwoNumbers(5,10);// arguments are those which we pass at call the function or we can say the real value that re p
// passed during the call of function is called Arguments .
//console.log(num1);

 function loginUserMessage(userName="sam"){ //  we can also give default value to the parameters
         if(!userName){
            console.log("please enter the username ");
            return ;
         }
    console.log(`${userName} logged in now `);
 }
// if the arguments are empty then it logs // undefined logged in now
  loginUserMessage();

 loginUserMessage("abhishek kumar" );
