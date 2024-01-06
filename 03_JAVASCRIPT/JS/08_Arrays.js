// Arrays
const myArray = [0,1,2,3,4,5,6,7,8,9,10]
const fruits = ["Apple","Banana", "Mango"]

const newArray = new Array(1,2,3,4,5)
console.log(newArray[0])

// Array Methods

newArray.push(10)
newArray.pop()

newArray.unshift(78)
newArray.shift()

console.log(newArray.includes(9));
console.log(newArray.indexOf(3));
console.log(newArray);

const mineArray = newArray.join()
console.log(mineArray);
console.log(typeof(mineArray))

// Perform Slicing and Splicing in Array

console.log("A", newArray)
const updatedarray = newArray.slice(2,3)
console.log(updatedarray)

console.log("A", newArray)
const updatedarray1 = newArray.splice(2,3)
console.log(updatedarray)


