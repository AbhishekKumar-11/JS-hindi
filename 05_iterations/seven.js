const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;



 // map function returns the new array with all hte expected modification on every element on array 
 // doesn't chnage the original array ;
 // filter also does not change the original array 
// const newNumbres =  numbers.map( (num) => {

//     return num+10 ; 
// } ) 

// console.log(numbers);
// console.log(newNumbres);



// we can also do chaning of the functions
 
   const   newNunms  = numbers
                   .map( (num) => {return num *10}) 
                   .map ( (num)  => {return num  +1 }  ) 
                   .filter ( (num) => { return num > 12}  )
 

                   console.log(newNunms);