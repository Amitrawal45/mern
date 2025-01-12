/**
 * Js and classes
 * is classes is in js ?
 * yes, jS doses have classes.This feature was introduced with the ECMAScript 2015
 * ES6. Javascript is primarily a prototype-based language.
 * OOPs - Programming paradyme
 * Object
 * -Collection of properties and Metods
 * -toLowerCase ,Date (Ojbect)
 * Why use OOPs ?
 * Beacuse code is messive so it reduce the messive code .
 *
 * Components, Parts of OOps
 * Object literal{}
 * -Constructor Function
 * -Prototype Function
 * -Classes
 * -Instances (new ,this)
 *
 * 4-Pillers
 * a. Abstraction
 * b. Encapsulation
 * c. Inheritance
 * d. Polymorphism
 */

// Object Literal

// const user = {
//   name: "Amit Rawal",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(
//       `Name: ${this.name}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`
//     );
//     console.log(this)
//   },
// };

// console.log(user.getUserDetails());

// const promiseOne = new Promise() -> new Constructor Function
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // return this -> Implecitly define retuurn .
}

const userOne = new User("Amit Rawal", 12, true);
const userTwo = new User("Chai aur code", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

//new -> empty object create (instance)
//constructor functoon call because of new keyword
//this key word is inject
//Output.
//cunstructor -> reference itself.
//instanceOf
