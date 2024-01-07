const myObj =  {
    js : "Javascript",
    py : "Python",
    swift : "Swift"
}

for (const i in myObj) {
    console.log(`${i} shortcut is for ${myObj[i]}`)
}

ar = [1,2,3,4,5,6,67,7,34,44]
// for in loop gives us keys
for (const i in ar){
    console.log(ar[i])
}