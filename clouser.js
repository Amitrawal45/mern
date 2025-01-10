// function init() {
//   var name = "Amit Rawal";
//   function displayName() {
//     console.log("Goodmorning", name);
//   }
//   name = " Monika Gurung";
//   return displayName;
// }
// let result = init();
// result();


// function returnFunction(){
//   const x = () => {
//     let a = 1;
//     console.log(a)
//     const y = () => {
//       let a = 2;
//       console.log(a)
//       const z = () => {
//         let a = 3;
//         console.log(a)
//       };
//       z()
//     };
//     y()
//   };
//    return x;
// }
// let result = returnFunction()
// result()



//Lexical Scoping.
// function outer() {
//   let userName = "Amit45";

//   function inner() {
//     console.log("Inner", userName);
//   }
//   function innerTwo() {
//     console.log("Inner Tow", userName);
//   }

//   inner();
//   innerTwo();
// }
// outer();

//closure
// function outerScope(){
//   let name = " Amit Rawal "
//   function innerScope(){
//     console.log("InnerScope :", name)
//   }
//   return innerScope;
// }

// let result = outerScope()

// result()

// message = "Good Global";
// function hello1() {
//  let message = "Goodmorning";
//   {
//     let message = "Goodafternoon"
//     console.log("Hello 1", message);
//   }
//   let c = function hello2(){
//     console.log("I am C",message)
//   }
//   return c;
// }
// let c = hello1();
// c()
