// // const product = [
// //   {
// //     name: "Product 1 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 2",
// //     price: 1200,
// //     discount: 50,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 3 ",
// //     price: 1200,
// //     discount: 30,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 4 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 5 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 6 ",
// //     price: 1200,
// //     discount: 40,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 7 ",
// //     price: 1200,
// //     discount: 30,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 8 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 9 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 10 ",
// //     price: 1200,
// //     discount: 10,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 11 ",
// //     price: 1200,
// //     discount: 20,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 12 ",
// //     price: 1200,
// //     discount: 30,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 13 ",
// //     price: 1200,
// //     discount: 50,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 14 ",
// //     price: 1200,
// //     discount: 50,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Product 15 ",
// //     price: 1200,
// //     discount: 60,
// //     category: "Electronics",
// //   },
// // ];

// // //find all the product having discount < 20

// // let productsLessThan20 = product.filter(product => product.discount < 20);
// // console.log(productsLessThan20);

// // const coding = ["js", "ruby", "java", "python", "php"];

// // const values = coding.forEach((item) => {
// //   console.log(item);
// //   return item
// // });
// // console.log(values)

// // const myNums = [1, 2, 3, 4, 5, 6, 7, 8 ,9,10]

// // // const newNums = myNums.filter((num)=> {
// // //   return num > 4
// // // })

// // const newNums = []
// // myNums.forEach((num)=>{
// //   if(num > 4){
// //     newNums.push(num)
// //   }
// // })
// // console.log(newNums)

// const books = [
//   {
//     name: "Book 1",
//     title: "The Catcher in the Rye",
//     genre: "history",
//     publish: "1951",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 2",
//     title: "To Kill a Mockingbird",
//     genre: "Fiction",
//     publish: "1960",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 3",
//     title: "1984",
//     genre: "history",
//     publish: "1949",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 4",
//     title: "Pride and Prejudice",
//     genre: "Fiction",
//     publish: "1813",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 5",
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publish: "1925",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 6",
//     title: "Brave New World",
//     genre: "Dystopian",
//     publish: "1932",
//     edition: "First Edition",
//   },
//   {
//     name: "Book 7",
//     title: "The Great Gatsby",
//     genre: "Dystopian",
//     publish: "1932",
//     edition: "First Edition",
//   },
// ];

// // const userBooks = books.filter((bk)=>{})
//   const userBooks = books.filter((bk)=>{
//     return bk.publish >= 1950 && bk.genre === "history"

//   })

// console.log(userBooks)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map((num)=>{
//  return num + 10
// })
// console.log(newNums)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums
// .map((num)=> num * 10)
// .map((num)=> num  + 1)
// .filter((num)=> num >= 40)
// console.log(newNums)

// const myNums = [1,2,3,4,5,6,7,8]

// const myTotal = myNums.reduce((acc,currVal)=>{
//   console.log(`acc:${acc} and currVal:${currVal}`)
//   return acc + currVal

// }, 0)
// console.log(myTotal)

const shoppingCart = [
  {
    name: "Glass",
    price: 100,
    quantity: 1,
  },
  {
    name: "Bucket",
    price: 100,
    quantity: 2,
  },
  {
    name: "Fork",
    price: 50,
    quantity: 3,
  },
  {
    name: "Spoon",
    price: 50,
    quantity: 4,
  },
  {
    name: "Plate",
    price: 150,
    quantity: 1,
  },
];

const totalPrice = shoppingCart.reduce((total ,item)=>{
  return total + (item.price * item.quantity)
},0)
console.log(totalPrice)
