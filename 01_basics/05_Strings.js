 // both are same doesn't matter if you  put a single court or double court 
let a = "abhishek kumar"; 
let b = 'kumar abhishek' 

// modern way to use  is template literals or you can say String Interpolation
console.log(`my name is ${a} and my reverse name is ${b}`)
console.log(b.length);
console.log(typeof b);

// another way creating String using Objects 

const gameName = new String(`rishu-2152-@gmil.com`);

// it is an object  it comes with several methods 
// learning from all the other resources by R&D 
// that primitive String and  String Objects are diffrent 
// that the primitive string re immutable and if mutable then  it returns an new string 
// and objects Strings are mutable 
// objects provides us more functionalities like methods by its objects wrpper class 
// although you can use string  all methods in js on primitives also actualy behind the secnes js convert the primitives to object 
//   to access all methods this process is called a "Autoboxing"
// the conversion is temporary 
 
 // tere are several methods in String which are useful 
 
  console.log(gameName.charAt(1)); 
console.log(gameName.length);
console.log(gameName.indexOf(`@`));
console.log(gameName.substring(0,4)); // doesn't includes the last one 
 

let anotherString =  gameName.slice(-15,5);
console.log(anotherString);


let n = "             Abhishek           kumar          ";

console.log(n.trim()); //  trims the space at the strting and the ending of the String 
  

const url = `https://abhishekkumar/rishu%20kumar`

console.log(url.replace("%20","-")); // replces the specific string with specific string

console.log(url.includes(`rishu`)); // checks if the String is there or not 


console.log(gameName.split('-')); // splits the String and returns  an array in dividing with the help of arguments passed  
 
