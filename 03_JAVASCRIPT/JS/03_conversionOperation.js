let score = "33dsfsf"
console.log(typeof(score));

let valueinNumber = Number(score)
console.log(typeof(valueinNumber))
console.log(valueinNumber);

// NaN - Not a Number

// "33" => 33
// "33abd" => NaN

// Boolean Investigation
let isBoolean = ""
check = Boolean(isBoolean)
console.log((check))

// 1 -> TRUE
// 0 -> FALSE
// "" -> TRUE

let ab = 33
namee = String(ab)
console.log(namee);
console.log(typeof(namee));

// Operations
let value = 3
let negValue = -value
console.log(negValue);

console.log("Operators aand Conditional Exoressions");
let a = 10;
let b = 20;
// Arithematic Operator
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a % b = ", a % b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a ++ b = ", a++);
console.log("a ++ b = ", ++a);
console.log("a -- b = ", a--);
console.log("a -- b = ", --a);

// Assignment OPerator
c = 10;
d = 20;
console.log("c = ", (c += d));
console.log("c = ", (c -= d));
console.log("c = ", (c *= d));
console.log("c = ", (c /= d));
console.log("c = ", (c **= d));

// Comparison Operator

let e = "5";
let f = 10;
let g = 5;

console.log(e === g);
console.log(e == g);
console.log(e != g);
console.log(e <= g);
console.log(e >= g);

// Logical Operators

console.log("Logical Operators");
let q = 10;
let w = 20;
console.log("Logical and Operator");
// When both are True it will return True 
// Rest if anyone is False it will Return False
// LOGICAL AND TABLE
// DATA1  DATA2  RESULT
//   1      1       1
//   1      0       0
//   0      1       0
//   0      0       0



console.log("Logical OR Operator");
// If anyone is True it will Return True 
// Rest if anyone is False it will return True
// LOGICAL or TABLE
// DATA1  DATA2  RESULT
//   1      1       1
//   1      0       1
//   0      1       1
//   0      0       0

console.log("Logical NOT Operator");
// It Inverse the Value
// LOGICAL Not TABLE
// 1 -> 0
// 0 -> 1


// Stack(Primitive) In Stack we get the Copy of the Variable

let name = "Omkar Pomendkar"
let newname = name
newname =" Omkar Sanjay Pomendkar"
console.log(newname)
console.log(name)


// Heap (Non- Primitive) In heap we get the Refrence of the Variable
