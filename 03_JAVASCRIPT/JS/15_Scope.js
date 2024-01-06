// var c = 300
let a = 500
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    
    console.log(a);
    }

// console.log(a);
// console.log(b);
// console.log(a);


// Nested Scope

function one()
{
    const username = "omkar"

    function two()
    {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
 one()

 console.log(addOne(10))


 function addOne(num) {
    return num +1
    
 }

 


 const result = function addTwo(num) {
    return num + 2
    
 }

 console.log(result)

 