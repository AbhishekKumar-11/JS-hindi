// for each is lop is there to iterate over objects 

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) =>{
//     console.log(item);
// } )

// to perform certain opretation on every object we have some another iterators 

// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 // filters out  each element based on the condition provided to it . 
//  const nums =  myNums.filter( (num) =>{
//     return num >= 4
//  } )

 // console.log(nums);

  const myNum = [];

//   myNums.forEach( (num) =>  {
//     if(num > 4) {
//         myNum.push(num)
//     }
//   } ) 

  //  console.log(myNum);
 
    // often used to create filter by the users 

    // arrays of objects 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let bookUsers = books.filter( (object) =>  object.genre=="History" )

 bookUsers = books.filter( (book) => {
   return book.genre == "History" && book.edition >= 2000 ; 
 } )

 console.log(bookUsers);

