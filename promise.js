//Promise (always asynchronous)
/**
 * Pending - execution time
 * fullfill/reject
 * settelment
//  */

// const login = (username,email)=>{
//     const prom = new Promise((resolve,reject)=>{ // resolve and reject both are promise

//     })
// }
// login("admin","admin")
// console.log()

//create two function that should return promise
//Create a control machanism within promise to either return reslove or to reject
//Now,
//call the first function and upon it's resolve(Success execution) trigger/call the second function and print results.

const firstFunction = (username, email) => {
  return new Promise((resolve, reject) => {
    if (username === "amit45" && email === "amit@gmail.com") {
      resolve("Login successful");
    } else {
      reject("Invalid credentials");
    }
  });
};
const secondFunction = (username, email) => {
  return new Promise((resolve, reject) => {
    if (username === "amit45" && email === "amit@gmail.com") {
      resolve("Login successful");
    } else {
      reject("Invalid credentials");
    }
  });
};

firstFunction("amit45", "amit@gmail.com")
  .then((message) => {
    console.log(message);
    setTimeout(() => {
      secondFunction("amit45", "amit@gmail.com")
        .then((message) => {
          console.log(message);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  })
  .catch((e) => {
    console.log(e);
  });
