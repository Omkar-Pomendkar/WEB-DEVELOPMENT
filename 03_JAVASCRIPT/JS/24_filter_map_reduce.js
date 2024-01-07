// filter map reduce

// const coding = [1,2,3,4,5,6,7,8,9,10]

// const values = coding.forEach( (item)=> {
//     // console.log(item)
//     return item
// })

// console.log(values)


const nums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = nums.filter( (num)=>
//     {
//     return num>4}
//     // console.log(num>4)
//     )

// console.log(newnums)

newnums = []

nums.forEach( (nums) => {
    if (nums >4) {
        newnums.push(nums)
    }
});

console.log(newnums)