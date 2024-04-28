// for 

for (let i = 0; i < 10 ; i++) {
    const element = i
    if( i == 5 ){
      //  console.log("the best element is five  ");
    }
   // console.log(element);
}
 // console.log(element); // as cnnot be accessed element follows functional scope 

 // nested loops 

//  for (let i = 0; i < 10; i++) {

//     console.log(`this is the outer loop  ${i}`);
//               for (let j = 0; j < 10; j++) {
             
//                      //console.log(`Inner loop value ${j} and inner loop ${i}`);
//                      //console.log(i + '*' + j + ' = ' + i*j );
//               }
    
//  }


 let myArray = ["Badshah" , "sultan " , "King"]

    for (let i = 0; i < myArray.length; i++) {
       console.log(myArray[i]);
        
    }
// break and continue 

 // break statment breaks the current loop which you are iterating on 


 // for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// continue as it skips the current iteration and goes further 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

