class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Logged in as ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const amit = new User("Amit");
// console.log(amit.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("Iphone","i@phone.com")
console.log(iphone.logMe())
