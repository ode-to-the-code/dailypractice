
// 1- maxCountOccurrences

console.log("hi")

nums1 = [1, 2, 3, 3, 3, 3, 3, 4]

const countMaxOccurrences = (nums) => {
  let dict = {};
  let runningTotal = 0;

  console.log("hi2")

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] += 1
        if (dict[nums[i]] > runningTotal) {
          runningTotal = dict[nums[i]];
        }
    } else {
      dict[nums[i]] = 1
      if (dict[nums[i]] > runningTotal) {
        runningTotal = dict[nums[i]];
      }
    }
  }
  console.log("hi3")
  return runningTotal;
}


let numsList = [[2, 3, 4], [77, 43, 88], [4, 2, 55]];
let outputList = [1, 1, 1];

for (var i = 0; i < numsList.length; i++) {
    console.log(countMaxOccurrences(numsList[i]) == outputList[i]);
}

// console.log(countMaxOccurrences(nums));