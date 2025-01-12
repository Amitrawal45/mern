// // const sayAmit = function () {
// //   console.log("Hello Amit");
// // };
// // const changeTest = function () {
// //   document.querySelector("h1").innerHTML = "Best JS Series";
// // };
// // const changeMe = setTimeout(changeTest, 2000);

// // document.querySelector('#stop').addEventListener('click',function(){
// //     clearTimeout(changeMe)
// //     console.log("Stopped")
// // })

// const sayDate = function (str) {
//   console.log(str, Date.now());
// };
// const intervalId = setInterval(sayDate, 2000, "Hi! Amit");
// document.querySelector("#start").addEventListener("click", function () {
//   setInterval(intervalId);
//   console.log("Start");
// });
// document.querySelector("#stop").addEventListener("click", function () {
//   clearInterval(intervalId);
//   console.log("Stopped");
// });

//Generate a random color

// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervalId;
// const startChangingColor = function () {
//   if (!intervalId) {
//     intervalId = setInterval(chnageBgColor, 1000);
//   }

//   function chnageBgColor() {
//     document.body.style.backgroundColor = randomColor();
//     console.log("Start");
//   }
// };
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   //   intervalId = null;
//   console.log("Stopped");
// };

// document.querySelector("#start").addEventListener("click", startChangingColor);
// document.querySelector("#stop").addEventListener("click", stopChangingColor);
