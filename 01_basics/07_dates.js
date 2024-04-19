// dates 

 let myDate = new Date();
// console.log(myDate.toString());//Fri Apr 19 2024 18:47:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Fri Apr 19 2024
// console.log(myDate.toLocaleString());//4/19/2024, 6:48:37 PM
// console.log(myDate.toISOString());//2024-04-19T18:51:40.659Z
// // console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());//4/19/2024


// we can also define our own date  

let myCreatedDate = new Date("04-20-2024") // the format is MM/DD/YY and remenber the month starts with Zero means 00 -> January
//console.log(myCreatedDate.toLocaleString());

let myTimeStmap = Date.now();

// console.log(myTimeStmap); // this give the time diff im milliseconds from starting time jan 1970 
// console.log(myCreatedDate.getTime());// the time in ms from the date given 
// console.log(Math.floor(Date.now()/1000)); // the time is coverted to seconds


// mostly used in projects 

let newDate = new Date();
console.log(newDate.toDateString()); // gives the cuurent date 
console.log(newDate.getMonth() +1); // extract the month from date provided +1 to give to user as moth starts from Zero 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
 // specialy use to fetch custom format of date 
 // press ctrl + space to see all the properties 
newDate.toLocaleString(`default`,{
    weekday: "long",



})



 