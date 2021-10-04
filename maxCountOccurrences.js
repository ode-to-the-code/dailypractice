

// work on this function 
// check out codeacademy 
// set aside a couple times for pomodoros on these two things (take actual breaks)
// this could mean counting like how many times each number appears. Then return an object with that info. 
let nums = [3, 322, 12, 1, 1]



// two functions-
 
// 1. make a maxCountOccurrences that returns the max, which i'll need to use a running variable for.

// 2. given two strings, a way to decide if one is a permutation of the other. Like 'cat' and 'act'. a dictionary can do this 




// 1- maxCountOccurrences

console.log("hi")

nums = [1, 2, 3, 3, 4]

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

