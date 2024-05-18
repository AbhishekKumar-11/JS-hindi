// protype behaviour is that is if the fuction or property no=t avliable in current scope 
// it goes to upper parent 

// array 
// string 
// function 
// all these are having object as parent 
 // and futher null

 let myArray = [1,2,34];
  

 let myUser = "Abhishek kumar   " ;
 let Channel  = " chai aur code   ";

 // if we take the case of array in that case we get property likewise further  prototype is also having having many properties
 //  we can inject our own properties 
  // with the help of Prototype keyword 
  

  let heroes = {
    thor : "hammer",
    spiderMan : "sling",
    getSpiderMan : function () {
        console.log(`the spidman is avaliable ${this.spiderMan}`);  
    }
  }

  
//   console.log(heroes);

//  we have injected the property in all objects then all objects will have this in the prototype 
Object.prototype.abhishek = function () {
    console.log(`abhishek is present in all objects `);
}

// console.log(heroes.abhishek()); 
 
 Array.prototype.heyAbhishek = function (){
    console.log(`hey ther you called me `);
 }

// here we can see that the property is in object but the array is also can access the prperties due to prototype nature as 
// if the property is not in the array it goes to parent that it goes to parent for the property and searches  as in this case goes 
// to object 
// in this case we also observe that the child can access the parent property but parent can't access the child property
/// this is the protoypial; behavior 
// myArray.abhishek();// abhishek property is assigned to object but still array can access it as its is child of object 
// myArray.heyAbhishek();

//  heroes.heyAbhishek(); //TypeError: heroes.heyAbhishek is not a function


// inheritance 


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // by this we can inherit the properties of TeachingSupport in the  prototype of 
}

// 
// this is the second method 
// the older method 
Teacher.__proto__ = User;


// moderm method

Object.setPrototypeOf(TeachingSupport,Teacher); // 

 let another = "       chai aur code by hiteh Choudhary    "

String . prototype .trueLength = function (){
    console.log(`${this}`);
    console.log(this.trim().length);
}


another.trueLength()
"Abhishek kumar  " . trueLength();


