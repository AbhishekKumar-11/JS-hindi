
// var follows global scope 
// let follows block scope 

 let a = 300 ;

 if (true){ // THIS IS scope 
    let a = 1000;
    const b = 30 ;
    var  c = 100; // here b is hoisted to global object as it is having aproperties of hoisting  
    // which may cause lot error as it having same name of variable but diffrent usage 
 //   console.log( "INNNER : " ,a);
}

// console.log(a);
  // console.log(b);
//console.log(c);
//console.log(a);


function one() {
   const userName= "Abhishek kumar "

   function two() {
    const website = "youtube "
      console.log(userName);
     
   }

   // console.log(website); this will thhrough error as the constant is having block scope so it couldn't be accessed out of it
   two()
}

 // one()

 if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube" // all the variable which are in global can be accessed in inner scope but vice-versa is not 
        // possible 
        // console.log(username + website);
    }
    // console.log(website); // thows an error website is not defined 
}

// console.log(username); // thows an error username  is not defined  as due to scope 

 
// ++++++++++++++++++++++++++++++++++++++  intresting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // functions statments  can be accessed above there declaration  due to hoisting 

 
function addOne(num) {
     return num+ 1;
}


console.log(addTwo(4)); // throws an error as cannot be accessed before the initilization 
 
const addTwo = function (num) {
    return num + 2 ;

}

 // console.log(addTwo(4)); // it can be accessed after declaration 

