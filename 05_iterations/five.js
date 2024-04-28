// for each 
const coding = ["js", "ruby", "java", "python", "cpp"]

// for each loop excepts callback function  
// an callback function which has no name 
// we can also use an arrow function 

   
// coding.forEach( function (val){
//     console.log(val);
// } )  

//    coding.forEach( (item) =>{
//     console.log(item);
//    });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

 // this will be used often 

  const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
  ]

  myCoding.forEach( (object) => {
       console.log(object.languageFileName);
  }) 