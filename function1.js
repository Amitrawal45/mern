// const helloWorld = (toPrint)=>{
//     console.log(toPrint)
// }
// helloWorld("Hello world")

//Hoisting

// getName()
// function getName(){
//     console.log("Amit Rawal")
// }

// const printAbc = (a,b = 0)=>{
//     return a + b
// }
// console.log(printAbc(10))
// console.log(printAbc(10,20))

// const foorBar = ()=>{
//     mul = a * b
//     return a + b


// }
// let mul;
// let a = 30
// let b = 20

// let sum = foorBar()
// console.log(sum , mul)

function calculateTaxes(totalSalary){
    let totalTax;
    if(totalSalary <= 500000){
        totalTax = totalSalary * 0.1
    }else if(totalSalary <= 700000){
        totalTax = 500000 * 0.1 + (totalSalary - 500000) * 0.5
    }else if( totalSalary <= 1000000){
        totalTax = 500000 * 0.1 + 200000 * 0.5 + (totalSalary -700000) * 0.20
    }else if(totalSalary <= 2000000){
        totalTax = 500000 * 0.1 + 200000 * 0.5 + 300000 * 0.20 + (totalSalary - 1000000) * 0.25

    }else{
        totalTax = 500000 * 0.1 + 200000 * 0.5 + 300000 * 0.20 + 1000000 * 0.25 + (totalSalary - 2000000) * 0.30
    }
    return totalTax
}
let totalSalary = 3000000;
console.log(`Total tax of rs 3000000 is ${calculateTaxes(totalSalary)}`)
