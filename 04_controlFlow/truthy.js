 // in js the condition are treated as trhy or falsy 

 const userEmail = []
 if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values 
 // "" , 0 , null , undefined , -0 , BigInt 0n , false , NaN

 // truthy values
 //"0" , [] , {} , 'false' , function(){}

 // how to find that Array is empty or not 

//  if(userEmail.length === 0){
//     console.log("the array is empty ");
//  }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty ");
}

 // nullish cooleasion  
 // important  while dealing with Functions and object as if ther right one gives NULL OR UNDEFINED it gives the left value ;
 //  important only reacts to nul and undefined ; 

 let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")