// we will be delving deeper into the objects
 
// as we know pi is constant we cannot change  the value of it 

 const py = Math.PI;
  Math .PI = 4 ;
  // we can t reassign the valu eof pi but why we cant do this this  is the agenda of this topic 


 console.log(py);
  const usage =  Object.getOwnPropertyDescriptor(Math,"PI");

  console.log(usage);

  const user = {
    username : "username",
    price : 250 ,
    isAvaliable : true ,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

  
 // we can also define the properties by of our own created ojects by using define protery on thta function 
   Object.defineProperty(user, "username",{
    enumerable : false ,
   }) 
   
  for (const [key,value] of Object.entries(user)) {
   if( typeof value  !== "function"){
    console.log(`${key} : ${value}`);
   }
  }
 // the further we will se how we can see all the properties of an object properties 
