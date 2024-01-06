// JAVASCRIPT FUNCTIONS
function great() {
    console.log("Hello WOrld")
}

great()

function sum(number1,number2)
{
    return number1+number2
}

const a = sum(10,20)
console.log("Result :",a)

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return -1
    }
    return `${username} just logged in`
}

const name = loginUserMessage()
console.log(name)