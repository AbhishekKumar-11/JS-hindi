// reduce function often used return the total cart value


// it has two things accumulator and the currValue , and also initial value 

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.



const myNums = [1, 2, 3]

 let  num = myNums.reduce( (acc, currVal) => {
        return acc + currVal
 },0 )

 //console.log(num);


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

 const total = shoppingCart.reduce( (acc,currVal) => {
       return currVal.price + acc ; 
 },0 )

 console.log(total);