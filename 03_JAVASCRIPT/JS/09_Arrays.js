const friends = ["Omkar", "Anuj", "Shubham", "Preeti", "Madhura"];

const fruits = ["Banana", "Apple", "Mango", "Chiku"];

friends.push(fruits);

console.log(friends);

// Slicing ARRAR INSIDE aRRAY

console.log(friends[5][3])

const frufre = friends.concat(fruits)
console.log(frufre)

//SPREAD OPERATOR

const spreadfrufre = [...friends,...fruits]
console.log(spreadfrufre)

const arr = [1,2,3,4,[5,6],[7,8,9,[10,11]]]
console.log(arr);

// Flat this Array

const real_array = arr.flat(Infinity)
console.log(real_array);

// Array is Array to check if it is Array

console.log(Array.isArray("Omkar"));
console.log(Array.from("OMkar"));

// Array of Section 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));