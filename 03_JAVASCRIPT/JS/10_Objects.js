// Objects in JAVASCRIPT
// Objeccts can be declare in 3 types
// 1) Singleton
// 2) literals
// 3) Constructor - Object.create

// Declaring Symbol

const mysym = Symbol("key1");

// Onject Literals
const user = {
  name: "Omkar",
  age: 24,
  [mysym]: "Omkar",
  location: "Mumbai",
  email: "omkarpomenkar100@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(user.name);
console.log(user.age);
console.log(user["name"]);
console.log(user["name"]);
console.log(user[mysym]);
console.log(typeof(user[mysym]));

// CHnaging the value of Objects



// Freezing the objects so that value cannot Change
// Object.freeze(user)
user.email = "omkar.huvidiglife@gmail.com"
console.log(user)

// Function Declaring

user.greeting = function() {
    console.log(`Hello USer your name is ${this.name} and your age is ${this.age}`);
}

console.log(user.greeting());