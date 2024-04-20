// arrays 

let myArray =[0,1,2,3,4,5] ;
// Array Methods 

// console.log(myArray.push(10));  // retuns the new length of the array and push the elememnts to the last of the array 

// console.log(myArray.pop()); // pop the element from the last of the array and return the elements which is poped 

// console.log(myArray.unshift(30)); // add the elements in the starting of the array  and return the new length aftere insertion of thr new element 



// console.log(myArray.shift()); // removes the element  from the begning of the array and return th element which is removed 


// it alaso includes all the methods towards  that  use to chech off 

// //  console.log( myArray.includes(5)); //checks  if thast particular  presentr in  the array or not 
// // console.log(myArray.indexOf(4));  // returns the index of the given element if the element is in the array 

// let newArray = myArray.join();

// console.log(newArray);// reutns the array in form of string 
// console.log(typeof newArray); //String 

// splice and slice // the differnce between is that the slice method does not modify the array while splice modify the array 

console.log( "A " ,  myArray);
console.log(myArray.slice(1,2));
console.log( "B",myArray); //the array is not modified as the element at index 1  as sliced out from array and the last one is not inclued
// 

console.log( "the element which are spliced out -> ",myArray.splice(1,2));
// we can observe that the  original array has been modified 
console.log( "C " ,myArray);