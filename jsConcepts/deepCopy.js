let obj = {
    name :"Abhishek kuamr",
    age:"20",

    social : {
        facebook:{
            userId : "user abhishek kumar"
        },
        instagram:{
            userId: "user abhishek instagram"
        }
    }
}

function deepCopy(obj) {

    if( typeof obj !==  'object' || obj == 'null') return obj;

    let copiedObj = Array.isArray(obj) ? [] : {};

    let keys =  Object.keys(obj);

    for(let i =0 ; i< keys.length ; i++){
       copiedObj [keys[i]] = deepCopy(obj[keys[i]]);
    }
    return copiedObj ; 
}

let obj2 = deepCopy(obj);

obj2.social.facebook.userId = "changed" ;
console.log(obj2.social.facebook.userId);
console.log(obj.social.facebook.userId);
