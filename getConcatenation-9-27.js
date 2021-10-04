

const getConcatenationWithPush = (nums) => {
    let nums2 = [];

    for (var i = 0; i < nums.length; i++){
        nums2.push(nums[i])
    }

    nums2.push(nums)
    return nums2.flat();
}


// console.log(getConcatenationWithPush([1, 2, 3, 4]))


const betterGetConcatWithPush = (nums) => {
    let nums2 = [];
    nums2.push(nums);
    nums2 = nums2.concat(nums) 
    // console.log()
    return nums2.flat()
}

// console.log(betterGetConcatWithPush([5, 6, 7, 8]))


const betterGetConcatWithPushWithNums = (nums) => {
    let nums2 = [...nums];
    console.log(nums2 + " " + nums)

    nums.push(nums2)
    return nums.flat()
}

console.log(betterGetConcatWithPushWithNums([5, 6, 7, 8]))

const getConcatenation = (nums) => {
    let n = nums.length; // 3 in the case of [1,2,3]
    let ans = new Array(2*n);
    // ans [1 und und 1 und und]
    //       |        |
    //       0(i)     3(i+n)
    // nums = [1,2,3]
    //           |
    //           1(i)
    // ans [1 2 3 1 2 3]
    //          |     |
    for (var i = 0; i < n; i++) {
        ans[i] = ans[i + n] = nums[i];
    }
}


const getConcatenation = (nums) => {
    let n = nums.length;
    let ans = new Array(2*n); 

    for (var i = 0; i < n; i++){
        ans[i] = ans[i + n] = nums[i]
    }
}


const simpleGetConcatenation = (nums) => {
    return nums.concat(nums);
}





const simpleGetConcatenation2 = (nums) => {
    return [...nums, ...nums];
}


