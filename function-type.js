// let categories = [
//     {
//         name: " Motors ,Tools,& DIY",
//         children:[
//             {
//                 name: "Lubricants",
//                 children:[
//                     {
//                         name:"Castrol",
//                         children:null
//                     }
//                 ]
//             },
//             {
//                 name:"Motorcycle",
//                 children:[
//                     {
//                         name:"Harley-Davidson",
//                         children:null
//                     },
//                     {
//                         name:"Yamaha",
//                         children:null
//                     },
//                     {
//                         name:"Suzuki",
//                         children:null
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Electronic",
//         children:[
//             {
//                 name:"Computer and Accessories",
//                 children:[
//                     {
//                         name:"Laptop",
//                         children:[
//                             {
//                                 name:"Dell",
//                                 children:null
//                             },
//                             {
//                                 name:"HP",
//                                 children:null
//                             },
//                             {
//                                 name:"Lenovo",
//                                 children:null
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// const catPrint = (cat ,i )=>{
//     if(Array.isArray(cat)){
//         i++
//         for(let cat1 of cat){
//             let toPrint =""
//             for(let j= 0; j < i; j ++){
//                 toPrint += "\t"
//             }
//             console.log(toPrint + cat1.name)
//             catPrint(cat1.children,i)
//     }
// }
// }
// for (let cat of categories){
//     console.log(cat.name)
//     catPrint(cat.children,0)
// }

//1-10

// const tillTen = (i)=>{
//     if( i <= 10){
//         console.log(i)
//         i++
//         tillTen(i)
//     }
// }
// tillTen(1)

// function findEven(i) {
//   if (i <= 20) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
//     findEven(i);
//   }
// }
// findEven(1);

let categories = [
  {
    name: "Men's Fashion",
    children: [
      {
        name: "Men's Bag",
        children: [
          {
            name: "Crossbody Bag",
            children: [
              {
                name: "Tote Bag",
                children: null,
              }
            ],
          },
          {
            name: "Backpacks",
            children: null,
          },
          {
            name: "Messenger Bag",
            children: null,
          },
          {
            name: "Business Bag",
            children: null,
          },
        ],
      },
      {
        name: "Clothing",
        children: [
          {
            name: "Shirts",
            children: null,
          },
          {
            name: "Pants",
            children: null,
          },
          {
            name: "T-Shirts",
            children: null,
          },
          {
            name: "Jackets",
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Women's Fashion",
    children: [
      {
        name: "Women's Bag",
        children: [
          {
            name: "Crossbody Bag",
            children: null,
          },
          {
            name: "Backpacks ",
            children: null,
          },
          {
            name: "Clutches",
            children: null,
          },
          {
            name: "Handbags",
            children: null,
          },
        ],
      },
    ],
  },
];



const catPrint = (cat, depth = 0) => {
  if (Array.isArray(cat)) {
    for (let cat1 of cat) {
      
      let toPrint = "\t".repeat(depth);
      console.log(toPrint + cat1.name);
      
      catPrint(cat1.children, depth + 1);
    }
  }
};

for (let cat of categories) {
  console.log(cat.name); 
  catPrint(cat.children, 1); 
}