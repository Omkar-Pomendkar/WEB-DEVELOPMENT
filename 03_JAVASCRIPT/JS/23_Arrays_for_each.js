// For each loops
const coding = [1,2,3,4,5,6,7,8,9,10]


// coding.forEach(function (i){
//     console.log(i)
// })

// Arrow Function

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printme(item) {
//     console.log(item)
// }

// coding.forEach(printme)

coding.forEach((item , index, arr)=> {
    console.log(item,index,arr)
})

// Array ke andar Object

const myCoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
    },
    {
        languageName : "java",
        languageFilename : "ja"
    },
    {
        languageName : "python",
        languageFilename : "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})