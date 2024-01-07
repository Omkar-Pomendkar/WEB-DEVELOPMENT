// Higher Order Array Loops
// for of Loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of arr) {
  console.log(i);
}

const great = "greatings";

for (const i of great) {
  console.log(i);
}

// Maps
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITEDD SATATES OF AMERICA");
map.set("FR", "FRANCE");
map.set("FR", "FRANCE");

console.log(map);

// loops

for (const [key, value] of map) {
  console.log(key, ":", value);
}

const myObject = {
  game1: "NFS",
  game2: "GTA",
};
for (const [key, value] of myObject) {
  console.log(key, ":", value);
}
