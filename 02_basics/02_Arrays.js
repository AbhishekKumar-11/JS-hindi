// arrays another methds which are advanced 

const marvels_Heroes =["thor" , "IronMan" , "spiderMan"]
const dc_Heros = ["superman" ,"Falsh" ,"Batman"];

// marvels_Heroes.push(dc_Heros); // here the whole array is inserted as an an element in marvels_Heroes
// console.log(marvels_Heroes);  //[ 'thor', 'IronMan', 'spiderMan', [ 'superman', 'Falsh', 'Batman' ] ]


// these method are not use often 
//  const new_Heros = marvels_Heroes.concat(dc_Heros) // concat return a new array concating the two given array the marvel_Heros are unaffected 
// console.log(new_Heros);

// spread operator are used  often 

const new_Heros = [...marvels_Heroes , ...dc_Heros];
//console.log(new_Heros);//[ 'thor', 'IronMan', 'spiderMan', 'superman', 'Falsh', 'Batman' ]

const another_Array = [1,2,3,4,[5,6] ,[7,8,[5,4]] ];

//console.log(another_Array.flat(Infinity));// its take the depth as the arguments in flat but you should know that how much depth is gone be maximum in array

console.log(Array.isArray("abhishek"));// checks that  in the given argument is n array or not 
console.log(Array.from("Abhishek")); // from methods have three paremeters  first the iteratable object or the instance of an 
//iteratable object the second is the map fuction in which you want to perform certain operation on every element , the trhird 
//one the this  argment as parameter its allows to set  allows you to specify a value to use as this when executing the mapping
// function passed as the second parameter example  you want set the value of multilplier of value 3 in mapping 
// if want to know more seach on gpt 

let score1 = 100
let score2 = 200
let score3 = 300
// put all elements providede in the aragument an returns in single new Array 
console.log(Array.of(score1, score2, score3)); // is used to create a new array with a variable number of arguments.
//It creates an array with elements passed as arguments, regardless of the number or types of arguments.
