// Making use of this Keyword 
// this works only in Arrow Function
const user = {
    username : "omkar",
    price : 1000,

    welcomeMessage : function (){
        console.log(`${this.username}, Welcome to Website`);
    }


}

// user.welcomeMessage()
// user.username = "Sanjay"
// user.welcomeMessage()
// what is current context is nothing but Value

console.log(this)


function chai ()
{
    console.log(this);
}
chai()


// Arrrow Function


const chaie = () =>
{
    console.log(this);
}
chaie()


// const addTwo = (num1, num2) => {

//     return num1 +num2
// } 



// Implicit Return
// const addTwo = (num1, num2) =>( num1 +num2) 


const addTwo = (num1, num2) => (num1 +num2)




console.log(addTwo(10,20))