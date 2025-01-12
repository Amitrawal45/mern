// //Promise (always asynchronous)
// /**
//  * Pending - execution time
//  * fullfill/reject
//  * settelment
// //  */

// // const login = (username,email)=>{
// //     const prom = new Promise((resolve,reject)=>{ // resolve and reject both are promise

// //     })
// // }
// // login("admin","admin")
// // console.log()

// //create two function that should return promise
// //Create a control machanism within promise to either return reslove or to reject
// //Now,
// //call the first function and upon it's resolve(Success execution) trigger/call the second function and print results.

// const firstFunction = (username, email) => {
//   return new Promise((resolve, reject) => {
//     if (username === "amit45" && email === "amit@gmail.com") {
//       resolve("Login successful");
//     } else {
//       reject("Invalid credentials");
//     }
//   });
// };
// const secondFunction = (username, email) => {
//   return new Promise((resolve, reject) => {
//     if (username === "amit45" && email === "amit@gmail.com") {
//       resolve("Login successful");
//     } else {
//       reject("Invalid credentials");
//     }
//   });
// };

// firstFunction("amit45", "amit@gmail.com")
//   .then((message) => {
//     console.log(message);
//     setTimeout(() => {
//       secondFunction("amit45", "amit@gmail.com")
//         .then((message) => {
//           console.log(message);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }, 2000);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task is Completed");
//     resolve()
//   }, 1000);
// });

// promiseOne
//   .then(function() {
//     console.log("Promise Consumed");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task2 is Completed");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise2 Consumed");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task3 is Completed");
//     resolve({
//       username:"Amit45",
//       email:"amit45@gmail.com"
//     });
//   }, 2000);
// });

// const promiseExample = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Amit45", email: "amit45@gmail.com" });
//     } else {
//       reject("Promise rejected due to error.");
//     }
//   }, 1000);
// });

// promiseExample
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(()=>{
//     console.log("Finally block executed")
//   })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "password" });
//     } else {
//       reject("ERROR: JS went wrong.");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     {
//       const response = await promiseFive;
//       console.log(response);
//     }
//   } catch (error) {
//     console.log(error)

//   }
// }
// consumePromiseFive()

// async function getAlluser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }
// getAlluser();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  }).then((data)=>{
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
