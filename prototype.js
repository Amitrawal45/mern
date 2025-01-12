// function multipleByFive(num){
//     return num * 5
// }
// multipleByFive.power = 2
// console.log(multipleByFive(5))
// console.log(multipleByFive.power)
// console.log(multipleByFive.prototype)

//Function is function itsself and is also an object.

// function CreateUser(username,score){
//     this.username = username;
//     this.score = score;
// }
// CreateUser.prototype.increment = function(){
//     this.score++
// }
// CreateUser.prototype.printMe = function(){
//     console.log(`Price is ${this.score}`)
// }

// const chai = new CreateUser("Chai",30)
// const tea = new CreateUser("Tea",250)

// chai.printMe()

// let myName = "Amit     ";
// let myChannel = "Chai      ";
// console.log(myName.trueLength())

let myHeros = ["Thor", "Spiderman"];
let heroPower = {
  thor: "Hammer of Thunder",
  spiderman: "Web Shooter",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.amit = function () {
  console.log("Amit is present in all Object.");
};
Array.prototype.heyAmit = function () {
  console.log("Amit is present in all Array.");
};
// myHeros.amit();
// myHeros.heyAmit()
// heroPower.heyAmit()
// heroPower.amit()

// Inheritence
const User = {
  name: "Amit Rawal",
  email: "amit@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const Teachingassistant = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: Teachingassistant,
};
Teacher.__proto__ = User;

//Modern Syntax

Object.setPrototypeOf(Teachingassistant, Teacher);

let anotherUsername = " Amit Rawal      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"amit".trueLength()
"coffee".trueLength()