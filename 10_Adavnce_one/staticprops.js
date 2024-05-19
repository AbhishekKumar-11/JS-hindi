class user {
    constructor (username){
    this.username = username ;
    }
    logMe(){
        console.log(`username ${this.username}`);
    }

  static  creteUserId(){ // static keyword is used to restrict the access to user  
        return "123"
    }
}

const user1 = new user("abhishek")
//console.log(user1.creteUserId());

class teacher extends user {
    constructor (username , email){
        super(username);
        this.username = username ; 
    }
}
const teacher1 = new teacher("hitesh choudhary" , "rishu@2152gmial.com")

console.log(teacher1.creteUserId());