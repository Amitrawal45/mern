// // /**
// //  * fs built-in library
// //  */

// // const fun1 = (cb) => {
// //   console.log("I am fun 1");
// //   cb(true);
// // };

// // // fs.writeFileSync("path","content",()=>{})
// // fun1((parm) => {
// //   //logic
// // });

// const delayOne = () => {
//   setTimeout(() => {
//     console.log("Delay 1 completed");
//   }, 1000);
// };

// const delayTwo = () => {
//   setTimeout(() => {
//     console.log("Delay 2 completed");
//   }, 3000);
// };

// const delayThree = () => {
//   setTimeout(() => {
//     console.log("Delay 3 completed");
//   }, 2000);
// };

// delayOne(); 
// delayTwo();
// delayThree();


setInterval(()=>{
    let today = new Date()
    let h = today.getHours()
    let i = today.getMinutes()
    let s = today.getSeconds()

    document.getElementById('clock').innerHTML = h + ":" + i + ":" +s
},1000)