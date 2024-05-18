function stUsername (username) {
    this .username = username;
  
}
 const  user =  function(username , email,password ){
    // normally its is called nut after its execution the execution context of the function is removed and the memory stack is also removed 
    // and it is not reffering to the current execution  context  
    // so this is use to pass the current execution context to the other function 
    stUsername.call(this ,username);
    this.email = email;
    this.password = password ;
 }
const user1 = new user("abhishek kumar" , "rishu2152@gmail.com" ,"razor pay ")

console.log(user1);