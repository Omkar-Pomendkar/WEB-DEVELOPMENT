// for loop 
//  for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best Number")
//     }
    
//  }
//  console.log(element)

const arr = [10,20,30,40,50]
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    console.log(arr[i])
}


// while loop

let i = 1
while (i<10) { 
    console.log(i);
    i += 2
    if (i==5) continue
    
}


// do while loop

let score = 11

do {
    console.log(`Score is ${score}`);
    score ++;
} while (score <= 10);