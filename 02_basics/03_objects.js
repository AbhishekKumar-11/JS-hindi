// singleton
// when  the object is created from constructor it is singleton   
//will only have a single object 
// Object.create

// object literals // this can have multiple instances 
// when thw object is fromed form literals it can have multiple instances 
const mySym  = Symbol("key1");

let myObj ={
   name :"Abhishek ",
   [mySym]  : "myUniqueKey1",
   "mentor":"Hitesh Choudhry",
   fullname : "Abhishek kumar",
   age : 20,
   location : "Bhubaneswar" ,
   email:"rishu2152@gmail.com",
   isLoggedin:false ,
   lastLoggedIn: ["mon","tues","wed"]


}

//console.log(myObj.name); /// this is corect but there is an also anohter way to do it 

// another way 
//console.log(myObj["fullname"]); // behing the scenes the  al the key  are kept in from String 
// it should be known as we consider if we put the key as String we cant access it by using a . (Dot)  
//console.log(myObj["mentor"]);
// if we want to create a unique Symbol for an user it can only be access by the [] only 
// OFTEN AS IN JS INTERVIEWS TO TO GIVE A UNIQURE SYMBOL TO USER AND USE THAT SYMBOL AS A KEY IN YOUR OBJECT 
//console.log(myObj[mySym]); // in this way we can access the Symbol as an Key in object.

console.log(myObj); // here we can see that the key mySym is Symbol  


// how we can change the objects  value 
myObj.name ="Harshit" 
console.log(myObj.name);

// we can freeze the object so that value cannot be changed further 
//Object.freeze(myObj); // here the object hs been freeze 
myObj.name ="mrinal"
console.log(myObj); 

myObj.greetting = function () {
    console.log("hello welcome user ");
   
}

myObj.greettingTwo = function () {
    console.log(`hello welcome user ${this.name}` );
   
}

console.log(myObj.greetting());
console.log(myObj.greettingTwo());


