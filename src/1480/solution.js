/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let newArray = []
    let sum = 0
    for ( let i = 0 ; i < nums.length; i++){
        if(i === 0){
            newArray.push(nums[i])
        }else{
            let sum = nums[i] + newArray[i-1]
            newArray.push(sum)
        }
    }
    return newArray
};


let nums = [1,2,3,4]

console.log(runningSum(nums))


