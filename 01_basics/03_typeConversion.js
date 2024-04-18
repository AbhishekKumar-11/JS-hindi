 let score = "33abc" ;

 
 let valueInNumber = Number(score);
// console.log(valueInNumber);  // NaN
// console.log(typeof valueInNumber); // type of NaN is number so it's log is  number but actually the value coverted id NaN 
// null => 0  ; type of Object 
// undefined  =>NaN ; typeof undefined 
   // "33" => 33 
   // "33abc" => NaN
   // true =  1 ; false = 0 ; 


   let isLoggedIn = 0

   let booleanIsLoggedIn = Boolean(isLoggedIn)
    //    console.log(typeof booleanIsLoggedIn);
    //   console.log(booleanIsLoggedIn);
     
// 
 //  1 =>  true   ; 0  => false  ;
// "abhishek kumar" => true ; "" => false    // "0" => true  


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************************************Operastors *****************************************************************


// console.log(2+3);
// console.log(2*3);
// console.log(2**3);
// console.log(2-3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Abhishek kumar "

let str3 = str1 + str2 

// console.log( 1 +  "2");  12
// console.log( "1" +  2);   12
// console.log( "1" +  2 + 2 );  122 
// console.log( 1 +  2 + "2" );  32 
// console.log( "1" +  "2");  12 

// console.log( (3 + 4) * 5 % 3); this is not recommeded if anuy type of operation preffer parenthesis

  //  console.log(+true);  // 1  
 //     console.log(+""); // 0

 
let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // this not recommdede yto write like this  



let gameCounter = 100
++gameCounter;
console.log(gameCounter);  // 101

 // here  in this two cant see any diffrence but there is a diffrence b/w prefix and postfix increment and decrement 
 // as prefix first increment/ decrement then use or assign 
 // as postfix first use or perform operation and then increment / decrement 


let GameCounter = 100
GameCounter++;
console.log(GameCounter); // 101 