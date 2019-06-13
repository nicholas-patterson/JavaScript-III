/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If you use this outside of an object it will log the window object.
 * 2. implicit binding when you call this in a function the object in the function is the (this).
 * 3. We can bind using the new keyword in a constructor function to return a new type of the function.
 * 4. Explicit binding is usinfg .call or .apply if you a using arrays. Or you can use .call and the rest operator.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayHello(fullName) {
  console.log(this);
  return fullName;
}
sayHello("Nicholas");

// Principle 2

// code example for Implicit Binding
const myPerson = {
  greeting: "Hello,",
  sayHello: function() {
    console.log(`${this.greeting} Nicholas is my name... What is yours ?`);
  }
};
myPerson.sayHello();

// Principle 3

// code example for New Binding

function People(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function() {
    console.log(
      `Hello, my name is ${this.name} my age is ${
        this.age
      }... Whats your name ?`
    );
  };
}
const nicholas = new People("Nicholas", 22);
nicholas.speak();

// Principle 4
// code example for Explicit Binding

const aboutMe = {
  name: "Nicholas Patterson",
  city: "Sharon Hill",
  favoriteFood: "cheeseburger"
};

const hobbies = ["Hockey", "Coding", "Binging Shows"];

function justMe(thing1, thing2, thing3) {
  console.log(
    `Hello, my name is ${this.name}, I live in ${
      this.city
    }. Some of my hobbies are ${thing1}, ${thing2}, and ${thing3}... btw my favorite food is a ${
      this.favoriteFood
    }`
  );
}

justMe.call(aboutMe, ...hobbies); // With rest operator
justMe.apply(aboutMe, hobbies); // Without rest operator
