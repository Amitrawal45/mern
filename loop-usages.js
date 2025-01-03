let allProducts = [{
    name:"Product One",
    price: 1000,
    discount:10
},
{
    name:"Product Two",
    price: 1000,
    discount:10
},
{
    name:"Product Three",
    price: 1000,
    discount:10
},
{
    name:"Product four",
    price: 1000,
    discount:10
},
{
    name:"Product five",
    price: 1000,
    discount:10
},
]


// let dis_Amt = 0
// for(let i = 0; i < allProducts.length; i++){
//     dis_Amt = allProducts[i].price * allProducts[i].discount/100
//     allProducts[i]['discountAmount'] = dis_Amt
//     allProducts[i]['afterDiscount'] = allProducts[i].price - dis_Amt
// }
// console.log(allProducts)


//Create a js program to print in the following formate:

//Name: User One
//Email:one@user.com
//Address:Kathmandu
//Phone:9867362722
//--------------------
//Name:......
//Email:.....
//Address:.....
//Phone:.....
//Create a js array with atleast 10 object with name , email,address and phone key
//priint each object in the above mentioned formate of the array veriables.

let users = [
    {name: "User One", email: "one@user.com", address: "Kathmandu", phone: "9867362722"},
    {name: "User Two", email: "two@user.com", address: "Pokhara", phone: "9867362723"},
    {name: "User Three", email: "three@user.com", address: "Biratnagar", phone: "9867362724"},
    {name: "User Four", email: "four@user.com", address: "Itahari", phone: "9867362725"},
    {name: "User Five", email: "five@user.com", address: "Dharan", phone: "9867362726"},
    {name: "User Six", email: "six@user.com", address: "Butwal", phone: "9867362727"},
    {name: "User Seven", email: "seven@user.com", address: "Rajbiraj", phone: "9867362728"},
    {name: "User Eight", email: "eight@user.com", address: "Lalitpur", phone: "9867362729"},
    {name: "User Nine", email: "nine@user.com", address: "Bhaktapur", phone: "9867362730"},
    {name: "User Ten", email: "ten@user.com", address: "Kirtipur", phone: "9867362731"}
];

// users.forEach(user => {
//     console.log(`Name: ${user.name}`);  
//     console.log(`Email: ${user.email}`);
//     console.log(`Address: ${user.address}`)
//     console.log(`Phone: ${user.phone}`);
//     console.log("--------------------");
// });

// for( let i = 0; i < users.length; i++ ){
//     console.log(`Name: ${users[i].name}`);
//     console.log(`Email: ${users[i].email}`);
//     console.log(`Address: ${users[i].address}`);
//     console.log(`Phone: ${users[i].phone}`);
//     console.log("--------------------");
// }


//Practice Questions.
//Print the following :

/**
 * P
 * p r
 * p r o
 * p r o g 
 * p r o g a 
 * p r o g a m
 * p r o g a m m
 * p r o g a m m i
 * p r o g r a m i n
 * p r o g r a m m i n g
 */

//Code.
// let word = "PROGRAMMING"
// let result = ""
// for(let i = 0; i < word.length; i++){
//     result = result + word[i] + " "
//     console.log(result.trim())
// }

/**
 * 1 2 3 4 4 6
 * 1         6
 * 1         6 
 * 1         6
 * 1         6
 * 1 2 3 4 5 6       
 * 1
 * 1
 * 1
 * 1
 * 1
 * 
 */

//Code


// const rows = 11;
// const cols = 6;


// for (let i = 1; i <= rows; i++) {
//     let line = ""; 

//     for (let j = 1; j <= cols; j++) {
        
//         if (i === 1 || i === 6) {
          
//             line += j + " ";
//         } else if (j === 1 || (j === 6 && i <= 6)) {
           
//             line += j === 1 ? "1 " : "6 ";
//         } else {
            
//             line += "  ";
//         }
//     }

  
//     console.log(line.trim());
// }


/**
 * 1 
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 * 
 */

//Code
// let rows = 5;
// for( let i = 1; i <= rows; i++){
//     let line = ""
//     for(let j = 1; j <= i; j++){
//         line = line + j + " "
//     }
//     console.log(line.trim())
// }

/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

let rows = 5;
for(let i = rows; i >= 1; i--){
    let line = " "
    for(let j =1; j<=i; j++){
        line = line + j + " "
    }
    console.log(line.trim())

}

