 // this keyword reffers to the context 
const user = {
    name : "abhishek kumar ",
    price : 999,

    wewlcomeMessage : function () {
        console.log(`${this.name} , welcome to the website`);
    }
}


// user.wewlcomeMessage(); 
// user.name = "sam";
// user.wewlcomeMessage();

 // console.log(this);  // in node this in global is a empty object 
// but in browser it reffer to broser global object which is window

// function chai() {
//     let username = "abhishek";
//     console.log(this); // this return protoype
// }

 // chai();


//  const chai = function () {
//     let username = "abhishek";
//     console.log(this.username); this return protoype
// }


//chai();

const chai =  () => {
        let username = "abhishek";
        console.log(this);  //this return empty object
    }

    chai();

//  // arrow functions in js 

//     const addTwo = (num1,num2) => {
//         return num1 + num2
//     }

// if there is only one statment to be returned the iths done by function implicitly , no need to write the return keyword

 //   const addTwo = (num1,num2) =>  num1 + num2

    
// const addTwo = (num1, num2) => ( num1 + num2 )



  const addTwo = (num1, num2) => ( {name : "abhishek kumar "})

  console.log(addTwo(10,15));


  // const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


    