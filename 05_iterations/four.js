// for in 
 // 
 const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
 } 

//  for (const key in myObject) { // gives the key and access the object value  
//       console.log(`${key} this is key and value :  ${myObject[key]}`)
//  }

const programming = ["js", "rb", "py", "java", "cpp"] ;
   // i  gives index we can 
for(let i in programming) {
   //   console.log(programming[i]); 
}

const map = new Map() ;
 
 map.set('IN',"India") ;
 map.set('USA' , "united states of america ")
 // map.set('Fr', "France")
// map.set('IN', "India")

for(const elem  in map){
    console.log(elem); // gives no output 
}
 




