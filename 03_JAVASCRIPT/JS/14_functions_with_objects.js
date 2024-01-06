// Function with Objects 
//  lots of Arguments

function calculateCartPrice(val1,val2,...num1)
{
    return val1,num1
}

console.log(calculateCartPrice(2,32,34,23,33,3));

// Passing objects in Functions

const user = {
    username : "Omkar",
    price : 100
}

function handleObjects(userq) {
    console.log(`Username is ${userq.username} and price is ${userq.price}`) ;
}

handleObjects(user)


// Infunction we can directly add objects

handleObjects({
    username : " Johnny",
    price : 1000

})

// Passing Arrays in Function
const myarray = [100,200,30,400,500]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myarray))