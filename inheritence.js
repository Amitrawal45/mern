class User {
  constructor(username, email) {
    this.username = username;
    this.email = email; 
  }
  logMe() {
    console.log(`User: ${this.username}, Email: ${this.email}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username, email);
    this.password = password;
  }
  logMe() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const data = new Teacher("Amit Rawal","amit@gmail.com",1234)
console.log(data.logMe())


// // const masalaTea = new User("Amit Rawal","masala@gmail.com")  
// // masalaTea.logMe()

// // console.log(data instanceof User)

// class User{
//     name;
//     email;
    
// }

// class Trainer extends User{
//     course;
//     constructor(){
//         super()
//         console.log("I am from User")
//     }
// }
// const trainer = new Trainer()
