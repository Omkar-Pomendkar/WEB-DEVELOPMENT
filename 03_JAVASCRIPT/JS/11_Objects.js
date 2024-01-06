// const tinderUSer = new Object()  SIngleton Object
// const tinderUser = {} this is not singleton Object

const tinderUser = {}
tinderUser.id = "121323fgg"
tinderUser.name = "Joshua"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUSer = {
    email: "omkar@gmail.com",
    fullname: {
        firstname : "Omkar",
        middlename : "Sanjay",
        lastname : "Pomendkar"
    }
}
console.log(regularUSer.fullname.firstname);

// Combine 2 Objects

const obj1 = {1: "One", 2 : "Two"}
const obj2 = {3: "Three", 4 : "Four"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3)

// Another type for assigning Objects
 
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

// This is Spread Operator
const obj5 = {...obj1,...obj2}
console.log(obj3)

console.log(tinderUser);

// Keys
console.log(Object.keys(tinderUser))

// Values
console.log(Object.values(tinderUser))

// entries
console.log(Object.entries(tinderUser))

// To check if it has Values
console.log(tinderUser.hasOwnPropeety('isLoggedIn'));