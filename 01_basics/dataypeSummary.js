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


 // ++++++++++++++++++++++++++++++++++++++++++++++++Stack and Heap memory++++++++++++++++++++++++++++++++++++++++++++++++++++ 


//    primitives(Stack) and reffrences (Heap)

   
   // as in primitive  the copy of the  datatypes is given as hte changers made in one doesn't reflect each other 
   let a = 75 ;

   let b = a;  
   b=5;
   console.log(a); // 75   
   console.log(b);  //5

// in  reffrences or non-pritive the  datatypes are passed by reffrences (means that the diffrent variable
// reffer to same adddress  ) as the  changes done will reflect to another because they both point to same location or address

 let userOne = {
    name : "abhishek@gmail.com",
    id :"2141011160"
 }

 let userTwo = userOne;

 userTwo.name = "rishu@2152@gmial.com";

 console.log(userOne.name); // rishu@2152@gmial.com
 console.log(userTwo.name);  // rishu@2152@gmial.com



