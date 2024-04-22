// const tinderUser = new Object(); // this is formation of from constructor // this is singleton
//  const tinderUser1 = {}; // this is also object creation from literals // but this is non-singleton

 const userTinder = {};

 userTinder.id ="123abc";
 userTinder.name = "Abhishek Kumar" ;
 userTinder.isLoggedIn = false;


 //console.log(userTinder);

// WE can  also  use nest object under objects  
 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Kumar",
        }
    }
}

// how we access 
//console.log(regularUser.fullname.userfullname.firstname);

//const returnedTarget = Object.assign(target, source); the prototype of the function 
// if we want to  assing or you can say concatenate two or more object in one 
// we can use spread operator or we can use Object.assign() which return an all objects in a target object it also return  in a
// return all object in a variable 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"} 

// const obj3 = {obj1,obj2};
// console.log(obj3);// there is a problem as there in object the two objets are INSERTED as objects { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// so this the above one is wrogn way so we will use 

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // or spread operator 
//console.log(obj3)


// and if we get the data from server then we will get in the form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// this the below one is important and often use as for retrival of data from Objects 

console.log(Object.keys(userTinder)); // returns all the keys in the object in an array 
console.log(Object.values(userTinder));// returns all the Values in the object in an array 
console.log(Object.entries(userTinder));//return an array in which each key value pair is in an array

console.log(userTinder.hasOwnProperty('isLoggedIn')); //return that object are having that key valuer pair or not  returns a boolean value 