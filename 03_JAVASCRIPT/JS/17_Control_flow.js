// IF STATEMENT
// if(condition )
// {

// }

// Comparision Operator < , > , >= ,<= ,!= , == , === 

const age = 20

if(age > 18)
{
    console.log(`Age of user is ${age} so he can Vote`)
}
else
{
    console.log(`Age of user is ${age} so he can't Vote`)
}

// Short hand Operator


const balance = 100
if (balance > 500) console.log("Balance updated"),
console.log("test2 ");

// Implicit Scope

if (balance < 500) {
    console.log("less then 500");
}
else if (balance < 750)
{
    console.log("less then 750");
}
else if (balance < 900)
{
    console.log("less then 900");
}
else{
    console.log("Less then 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==8) {
    console.log("Allow to buy Course")
}

if (loggedInFromEmail || loggedInFromGoogle ) {
    
    console.log("User logged in");
}