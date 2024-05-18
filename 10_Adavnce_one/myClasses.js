// ES 6 

// this is just  a syntatic sugar 
// behind the scenes js prototype oriented  
// class user{
//     constructor(username,email,password){
//         this.username =username;
//         this.email= email ;
//         this.password = password ;
//     }
//     ecryptionPassword(){
//         return `${this.username}`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("abhishek" , "google@2152" , 123)

// console.log(chai.ecryptionPassword())
// console.log(chai.changeUsername());

// behind the scnes 

function User(username,email,password){
    this.username =username;
    this.email= email ;
    this.password = password ;
}

User.prototype.encryptPassword = function (){
  return `${this.username}`
}
User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
  }

  const tea = new User("tea" , "123@gvhifd" , 1245);

 console.log( tea.changeUsername())
 console.log(tea.changeUsername());