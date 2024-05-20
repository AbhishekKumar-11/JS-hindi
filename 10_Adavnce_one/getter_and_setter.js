

class user {
     constructor(username, password ){
       this.password = password;
       this.username = username ;

     }

  // if we set the getter we also need to set the setter also as it works fine we can t set only  one of them 
  // as to it will cause error 

     get password (){
        // in this we use _(undderscore) as we can uderstand we are wea are setting password as private 
        // but then we are creating an an another variable as to store the password 
        return this._password.toUpperCase() ; 
     }
     set password (value){
    this._password = value ;
     }


     get username (){
        // in this we use _(undderscore) as we can uderstand we are wea are setting password as private 
        // but then we are creating an an another variable as to store the password 
        return this._username.toUpperCase() ; 
     }
     set username (value){
    this._username = value ;
     }
}
const user1= new user("abhishek kumar " , "123av")

console.log(user1.username);