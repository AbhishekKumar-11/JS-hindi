 // function itself is an object 
 // as we can set all property values by itself 

function multiplyByFive(num){
   return num *5 ;
}
  multiplyByFive.power = 2 ;
 console.log(multiplyByFive(5));
 console.log(multiplyByFive.power); // 2 ;
 console.log(multiplyByFive.prototype); // {} 

function createUser(userName,cost) {
    this.userName =userName;
    this.cost = cost ;
}

createUser.prototype.increment =  (score) =>{
 this.score;
}
createUser.prototype.printMe = function () {
     console.log(`the user score ${this.cost}`);
}

const chai = new createUser("chai" , 25)
console.log(chai);

chai.printMe();