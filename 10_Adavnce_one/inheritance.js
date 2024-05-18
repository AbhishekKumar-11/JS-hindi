class User {

    constructor (username) {
       this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teachers extends User {
    constructor (username , gmail , password ){
        super(username)
        this.gmail = gmail;
        this.password = password ;
       
    }
    addCourse(){
        console.log(`the coursre added to user ${this.username}`); 
     }
}

const chai = new User("Masala chai ") ;
chai.logMe();

// here  all properties of user is extended by Teacher 
// so we can acces its all methods 

const den =  new Teachers("Abhishek kukmar","hero@gmail.com",123) ;

den.logMe()

console.log(den instanceof Teachers);