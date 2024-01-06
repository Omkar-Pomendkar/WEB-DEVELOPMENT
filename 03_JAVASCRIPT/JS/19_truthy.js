const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// Falsy Value

// false,0,-0,BigInt 0n, "", null, undefined, NaN

// Truthy Values
// Anything inside a String is truthy Value
// "0",'false'," ", [],{}, function (){}


// Checking if Array is Empty

if (userEmail.length === 0 ) {
    console.log("Array is Empty");
    
}

// Checking if object is Empty
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("object is Empty");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
var1 = undefined ?? 15

console.log(val1);

// Ternary OPerator

// condition ? true : false
a = 10
b = 20
a>b  ? console.log(a): console.log(b);