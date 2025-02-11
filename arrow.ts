//arrow functions

class Greeter {
  firstName = "John";

  sayHello() {
    setTimeout(() => {
      console.log("Hello, " + this.firstName);
    }, 5000);
  }
}

let greeter3 = new Greeter();
greeter3.sayHello();
