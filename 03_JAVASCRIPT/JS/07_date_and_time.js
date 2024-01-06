// Date
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString);
console.log(mydate.toJSON());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());

console.log(typeof(mydate));


// let currentDate = new Date(2024 , 0 ,5)
let currentDate = new Date("2024-01-5")
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(currentDate.getTime());

let newDate  = new Date()
console.log(newDate);
console.log(newDate.getFullYear());