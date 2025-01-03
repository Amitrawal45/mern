//Arethmetic Operator

//Unary Operator

// let a = 10;
// let b = 67;

// console.log("a = ", a , "& b =",b)
// console.log("a++ = ",a++)
// console.log(a)


//Assignment operator

// let a = 10
// let b =45

// a += 10 //a = a+10
// console.log("a = ",a)


//Comparasion Operators

//  let a = 10; //number
//  let b = "10" //string

//  console.log("a!==b", a!==b)

//Logical Operators

// let a = 450
// let b = 50
// let con1 = a > b
// let cond2 = a === b


// let h = 10
// console.log(h++)
// console.log(++h)
// console.log(h)

// //null colaching operator
// let x = userNum.age ?? 0

// Object Detructor.

// let obj = {name: "John", age: 25, city: "New York"}
// let {name, age ,city} = obj
// console.log(city)

let obj1 = {
    name: "John",
    age: 25,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
let obj2 = obj1
obj2.name = "Amit"
console.log(obj1.name)

