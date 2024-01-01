// Primitive Datatypes
console.log("Variables and Datataypes");
var a = 10;
var name = "Omkar POmendkar";
console.log(typeof name);
var number = true;
console.log(number);
var google;
console.log(google);

// Non- PRimitive Datataypes

// Object
var myDetails = {
  name: "Omkar",
  surname: "Pomendkar",
};
console.log(myDetails);

// Array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);

// set
var newSet = new Set([1, 2, 1, 2, 3, 1, 3, 2, 0, 4, 4]);
console.log(newSet);

// var vs let vs const
 let names = "carrom";
{
  let names = "omkar";
  names = "pomendkar";
  console.log(names);
}
