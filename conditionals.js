//conditionals statements

// let age = 18;

// if(age >= 18){
//     console.log("We can Vote.")
// }

// else{
//     console.log("You are not eligible to Vote.")
// }

// let mode = "dark"
// let color;
// if(mode === "dark"){
//     color = "black"

// }
// else{
//     color = "white"

// }

// console.log(color);

// let age = 16
// if(age >= 18){
//     console.log("You are eligible to vote.")
// }
// else{
//     console.log("You are not eligible to vote.")
// }

// let num = 7;
// if (num % 2 == 0) {
//   console.log("Number is Even.");
// } else {
//   console.log("Number is Odd.");
// }



// let age = 78;
// if(age > 60){
//     console.log("You are senior citizen.")
// } else if(age  > 40){
//     console.log("You are uncle.")
// }
// else{
//     console.log("You are under age.")
// }

//Ternary Operator


// let age = 24;

// let result = age >=25 ? "Adult" : "Child" // simpler , compact if-else
// console.log(result)

// Qn.1 Get user to input a number using prompt ("Enter a number :").Check if the number is multiple of 5 or not.

// let num = prompt("Enter a number : ")
// if(num % 5 == 0){
//     console.log(num," is a multiple of 5.")
// }else{
//     console.log(num," is not a multiple of 5.")
// }


// Qn.2

// let score =93;
// let grade;

// if(score >= 90 && score <=100){
//     grade = "A"
// }else if(score >= 70 && score <= 80){
//     grade = "B"
// }
// else if(score >= 60 && score <=70){
//     grade = "C"
// }
// else{
//     grade = "F"
// }

// console.log("According to your score your grade is = ",grade)


//Print the amount of tax to be paid by a software developer. 
//if he earn a salary of Npr. 3000000 per year
//The tax range to be paid is as follow:
// for the first 500000 => 1%
// for the next 200000 => 15%
// for the next 300000 => 20%
// for the next 1000000 => 25%


// let salary = 3000000;
// let tax = 0;

// if (salary <= 500000) {
//     tax = salary * 0.01;
// } else if (salary <= 700000) {
//     tax = (500000 * 0.01) + ((salary - 500000) * 0.15);
// } else if (salary <= 1000000) {
//     tax = (500000 * 0.01) + (200000 * 0.15) + ((salary - 700000) * 0.20);
// } else if (salary <= 2000000) {
//     tax = (500000 * 0.01) + (200000 * 0.15) + (300000 * 0.20) + ((salary - 1000000) * 0.25);
// } else {
//     tax = (500000 * 0.01) + (200000 * 0.15) + (300000 * 0.20) + (1000000 * 0.25) + ((salary - 2000000) * 0.25);
// }

// console.log("The total tax to be paid is: NPR", tax);


//Create a js code block that print day of the week based on the number provided.

// Define the annual salary
let salary = 3000000;
let tax = 0;

switch (true) {
    case (salary <= 500000):
        tax = salary * 0.01;
        break;
    case (salary <= 700000):
        tax = (500000 * 0.01) + ((salary - 500000) * 0.15);
        break;
    case (salary <= 1000000):
        tax = (500000 * 0.01) + (200000 * 0.15) + ((salary - 700000) * 0.20);
        break;
    case (salary <= 2000000):
        tax = (500000 * 0.01) + (200000 * 0.15) + (300000 * 0.20) + ((salary - 1000000) * 0.25);
        break;
    default:
        tax = (500000 * 0.01) + (200000 * 0.15) + (300000 * 0.20) + (1000000 * 0.25) + ((salary - 2000000) * 0.25);
}

console.log("The total tax to be paid is: NPR", tax);














