let score = 400 ;

//console.log(score);

let balance = new Number(400);

//console.log(balance.toString().length);// first it,s converted to string then its lenght of that String is calculated 
//console.log(balance.toFixed(2));//usally used e-commerce as give upto which price which deciml point after some 
// calculation of  GST that in how much prcesion the price needs to be depicted 

let anotherNumber  = 123.8966;

//console.log(anotherNumber.toPrecision(4)); // use very carefully  asd you should be knowing that what is the number you are 
// performing the opertion s this function precesice the result the   method formats the number according to the specified
// precision and returns it as a string. If the precision is not specified, the method returns the entire number as a string


const hundred = 1000000;

//console.log(hundred.toLocaleString("en-IN"));// by default it set according us standards but bu giving it en-In it gives output 
// according to the indian standards


// +++++++++++++++++++++++++++++++++  Math +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=


  // there are many functions in Math 
//    console.log(Math);
//    console.log(Math.abs(-4)); // coverts negative intger to posative integer 
//    console.log(Math.round(4.5));// it rounds off the Number to nearest possible number 
//    console.log(Math.ceil(4.2));
//    console.log(Math.floor(1.9));
//    console.log(Math.min(4, 3, 6, 8));
//    console.log(Math.max(4, 3, 6, 8));
   

//console.log(Math.random()); // it always gives the random number between 0 to 1 
// we have to specify the range as to what we are expecting out of it by multiplying it with the value 
// by multiplying it to 10 the decimal move on right side and by adding +1 we have set the least value to 1 as that is the least  
//console.log((Math.random()*10)+1);  
//console.log(Math.floor(Math.random()*10)+1); // in this Math.floor function is giving the floor value  

const min = 10
const max = 20


// formula if you want to give in generate a random value between a numbers 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
















