// given an array nums -> runningSum[i] = sum(nums[0]...nums[i])

// input nums = [1, 1, 1, 1, 1]
// output runningSum = [1, 2, 3, 4, 5]
// running sum is obtained like this: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

// input nums = [3, 1, 2, 10, 1]
// output runningSum = [3, 4, 6, 16, 17]

// i += 1
// i = i + 1
// counter += 5 <-> counter = counter + 5
// input nums = [1, 1, 1, 1, 1]
// output runningSum = [1, 2, 3, 4, 5]


const runningSum = (nums) => {

    for (var i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }

    return nums 
}


console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

// nums = [1, 3, 6, 2, 1]
// output = [1, 4, 10, 12, 13]
// const runningSum2 = (nums) => {

}

// smallerNumbersThanCurr(nums)
// input nums=[8,1,2,2,3]
// output array= [4,0,1,1,3]

// we'll go over this on Monday and also review codeAcademy progress.