// function myFunction(){
//     console.log("Welcome to Javascript Function")
//     console.log("We are learning js")
// }
// myFunction()
// myFunction()

// function myFunction(msg){ //parameter
//     console.log(msg)
// }
// myFunction("Hello World") //Argunment

// function sum(a,b){
//     s = a+b
//     return s;
// }
// let val = sum(4,5)
// console.log(val)

//Arrow function

// const arrowSum = (a,b)=>{
//     console.log(a+b)
// }
// arrowSum(4,6)

//Qn.1 vowel count  from word

// function countVowel(str) {
//   let count = 0
//   for (const char of str) {
//     if(char === "a" || char === "e" || char === "i" || char==="o" || char ==="u"){
//         count++
//     }
//   }
//   console.log(count)
// }
// countVowel("AmitRawal");

// const countVow =(str)=>{
//     let count = 0
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++
//         }
//     }
//     console.log(count)
// }
// countVow("MonikaGurung")


// let arr = ["kathmandu","pokhara","dhangadhi","achham"]

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr)
// })

// let num = [2,3,4,5,6]
// let calSquare =(num)=>{
//     console.log(num*num)
// }
// num.forEach(calSquare)


// let arr = [2,3,4,5,6,7,8,9]
// let evenArr = arr.filter((val)=>{
//     return val > 4
// })

// console.log(evenArr)

// let arr = [3,4,6,3,2,6,5,44,46,]
// const output = arr.reduce((prev,curr)=>{
//     return prev < curr ? prev : curr
// })
// console.log(output)


// let marks = [89,45,78,97,98,90,45,43]

// let result = marks.filter((val)=>{
//     return val > 90

// })
// console.log(result)


// let n = prompt("Enter a number")
// let arr = []
// for(let i=1; i < n ; i++){
//     arr[i - 1] = i
// }
// console.log(arr)

// let output = arr.reduce((prev,curr)=>{
//     return prev + curr
// })
// console.log("Addition: ",output)

// let result = arr.reduce((fact,curr)=>{
//     return fact * curr
// })
// console.log("Factorial is: ",result)


// function oneToN(n){
    
//     for(let i = 1; i <=n; i++){
//         console.log(i)
//     }
//     console.log()
// }
// oneToN(2)
// oneToN(4)

// function eqn(a,b){
//     return Math.abs(a*a*a) +Math.abs(b*b*b)
// }
// console.log( eqn(-1,2))
// console.log(eqn(-2,-9))


// const print = (a,b)=>{
//     return a + b

// }
// console.log(print(1))

const foobar = ()=>{
    a = a+ b
}
let a = 10;
let b = 20
foobar()
console.log(a)