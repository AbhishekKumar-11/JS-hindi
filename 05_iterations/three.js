// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5] ;

 for (const item of arr) {
   //   console.log(item); // iterates over each item in the array 
 }

  const greeting = "Abhishek kumar"
   for (const greet of greeting) { 
    //   console.log(greet);  // iterates over each value of string 
   }

   // Map 

    const map = new Map();
    map.set('IN', "India")
    map.set('USA', "United States of America")
    map.set('Fr', "France")
    map.set('IN', "India") ; 

      console.log(map); // gives the map as output as an object 

    // for (const [key, value] of map) {
    //    //  console.log(key, ':-', value); // gives all key key and value 
    // }
  
    const myobject = {
        name : " abhishek kumar ",
        age : 20,
        power : "unlimited"
    }

    // for(const [key,value] of myobject){
    //    console.log(`${key} -: ${value}`);  // object are not iteratable 
    //   throws an error that is typeError my object is not iteratable 
    // }
     