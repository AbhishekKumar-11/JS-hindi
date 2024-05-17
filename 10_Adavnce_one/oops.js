const user = {
    user : "abhishek kumar",
    login : 8 ,
    signed : true ,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, login, isLoggedin) {
    this.username = username;
    this.login  = login;
    this.isLoggedin = isLoggedin;

   return this ;
}
// if we use no new keyword it would not create a new instance of that object  it would rathjer overwrite uver the iobject whenver ther is a call
// so using new keyword is essential to create a new instances 
const userOne =  new   User("hitesh" ,12 , true );
const userTwo  =  new  User("Chai", 11 , false );

console.log(userOne);
console.log(userTwo);