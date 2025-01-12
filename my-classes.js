// class User {
//Consuctor cannot be async function and cannot called manually , cannot arrow function.
//     constructor(username,email,password){
//         Class initialization logic
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }
//     encryptPassword(){
//         return `${this.password}abc`

//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const data = new User("Amit","amit@gmail.com","12345")
// // console.log(data.encryptPassword())
// // console.log(data.changeUserName())

// //Behind the scene
// function User1(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;

// }

// User1.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User1.prototype.changeUserName = function(){
//     return `${this.password}abc`
// }

// const tea = new User("Amit","amit@gmail.com","12345")

// console.log(tea.encryptPassword())
// console.log(tea.changeUserName())

//Create a js clss as product and assign name,pricediscountt from constructor
//add two properties,discountAmount and afterDiscount to the class
//Create two function to get discountAmount, assing the discount value and another function to get afterDiscount
//Print all the infromation of the product using OOPs.

class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.discountAmount = 0;
    this.afterDiscount = 0;
  }

  getDiscountAmount() {
    this.discountAmount = (this.price * this.discount) / 100;
  }

  getAfterDiscount() {
    this.afterDiscount = this.price - this.discountAmount;
  }
}

const product1 = new Product("Mobile", 10000, 10);
product1.getDiscountAmount();
product1.getAfterDiscount();
console.log(`Name: ${product1.name}`);
console.log(`Price: ${product1.price}`);
console.log(`Discount: ${product1.discount}%`);
console.log(`Discount Amount: ${product1.discountAmount}`);
console.log(`After Discount: ${product1.afterDiscount}`);
