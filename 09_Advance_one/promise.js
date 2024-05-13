// in this we will be learnig abiut the promises 
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// always remember promise is an object on that which we  create a new instance by new keyword  

// .then is linked with resolve  , when success
// .catch is linked with rejected , when there is  an error 
// sstored in a variable 
 const  promiseOne =   new  Promise (  function (resolve , rejected) {
     //Do an async task
    // DB calls, cryptography, network

    setTimeout(  () =>{
        console.log("the async operation is done ");
        resolve();
    },5000)
} )

 
promiseOne.then( function (user) {
   console.log("promise is consumed ");
})

// we can directly also create the promises 

new Promise ( function(resolve,reject) {

  setTimeout(  () =>{
    console.log("Async 2 is executed ");
    resolve();
  } ,1000 )
    
} )
.then( function (){
    console.log("async 2 consumed ");
} )


// we can also pass the dat awhhich we want to send then we  want to send its resolved by paasing into resolve arguments and it 
// further receive it as parameters 
const promiseThree = new Promise( function (resolve,reject){
   setTimeout(function () {
     resolve({name : "abhishek kumkar " , age : 21})
   },1000 )
} )
.then( (user) =>{
   console.log(user);
} );


const promiseFour = new Promise ( function (resolve ,reject ) {
      setTimeout ( function () {
          let error = true ;

          if(!error) {
            resolve({username: "abhishek", password: "123"});
          }
          else {
            reject('ERROR: JS went wrong');
          }
      },1000 )
} ) 

promiseFour
.then( function (user) {
  console.log(user);
  return user.username ;
} )
.then ( (username) =>{
      console.log(username);
} )
.catch( function (error) {
    console.log(error);
} ) 
.finally ( () =>  {
  console.log("finally the promise is executed it has been rejected or resolved ");
}) 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "js", password: "dj"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
});

// in this  type we handled the promise by using async await 
// in which we have to handle the error gracefully or we can  say we have to handle  
// as the above function was when error was true it has to handleled by try and catch but 
// same if the error was true no issue    
async function consumePromiseFive(){
    try {
        const response  = await promiseFive ; // dont put  () as promise is an object 
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}
 // so in order to catch the error we have to call the async await function
 consumePromiseFive();


//    async function getAllUser() {
//     try {
//         const response =   await fetch('https://api.github.com/users/AbhishekKumar-11');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log( " E : " , error);
//     }
//   }

//   getAllUser();

fetch('https://api.github.com/users/AbhishekKumar-11')
.then( (response)  =>{
   // console.log(response);
    return response.json() ;
})
.then( (response) =>{
    console.log(response);
} )
.catch((error) => console.log(error))