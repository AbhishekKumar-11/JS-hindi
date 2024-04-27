// if 

const isUserLoggedIn = true ;
const temparature = 41 ;

// if (temparature === 40 ){
//     console.log("temperature is leass than 50");
// }
// else {
//     console.log("temperature is greater than 50 ");
// }
// 

// < , > <=, >= , == , != , === , !== 


//  const score = 200 ;
//  if(score > 100 ){
//     let power = "fly ";

//     console.log(`usert : ${power}`);
//  }

 
const balance  =1000;


// console.log(`User power: ${power}`);
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // Logical AND operator 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // Logical OR operator 
    console.log("User logged in");
}