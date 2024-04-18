// there are mainly two types of data types in js 

// primitive 

Number
String
Boolean
Symbol
null
undefined
BigInt


 let id = Symbol('123');
 let anotherId = Symbol('123')

 console.log(id === anotherId); // although the input are same but they are not same as they give unique id 
 
 console.log(typeof anotherId);

//  Reffrences (Non primitives )

 Array
 Object
 Function


 const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


 