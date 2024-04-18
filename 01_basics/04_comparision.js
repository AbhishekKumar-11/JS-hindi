// console.log(1 > 2 );
// console.log(1 < 2 );
// console.log(1 >= 2 );
// console.log(1 <= 2 );
// console.log(1 != 2 );

// problems come when we use comparision or assignment operator with NULL and UNDEFINED espically with null 
// as Null in JS assgnment operators and both behave diferently 

console.log(null > 0);// False
console.log(null == 0); // False
console.log(null >= 0); // true in this null converted to 0 as it gives true as output 


console.log(undefined > 0 ); // False
console.log(undefined == 0 );// False
console.log(undefined >= 0 ); // False

 // === 
  
 console.log( "2" === 2 ); // this chechs the both if same type or not 