
// 0 == 0
// 0 == '0' these would both be true
// false == 'false'
// false == 0

// const nums = [2, 4, 6];
// const target = 4;

// tell you the number of times a given number (target) appears in the array
const countOccurences = (nums, target) => {
  let numsCount = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      numsCount += 1;
    }
  }
  return numsCount;
}


// tells you whether or not a given number (target) shows up the same number of times in two different arrays (num1, num2). Returns true or false
const countOccurences2 = (nums1, nums2, target) => {
  return countOccurences(nums1, target) == countOccurences(nums2, target);
}

// make countOccurences3, which will find the number that occurs the most in an array nums,
// like maxoccurences. the max amount of times.


// find the number that occurs the most often in an array nums.

 
let nums = [4, 6, 7, 7, 7, 8, 8]


// const countMaxOccurrences = (nums) => {
//     let maxTimesOccurred = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (countOccurences(nums, nums[i]) > maxTimesOccurred) {
//             maxTimesOccurred = countOccurences(nums, nums[i]);
//        }
//     }
//     return maxTimesOccurred;
// }


const countMaxOccurrences = (nums) => {
  let maxTimesOccurred = 0;
  for (var i = 0; i < nums.length; i++){
    if (countOccurrences(nums, nums[i]) > maxTimesOccurred) {
      maxTimesOccurred = countOccurences(nums, nums[i])
    }
  }
  return maxTimesOccurred;
}




// work on this function 
// check out codeacademy 
// set aside a couple times for pomodoros on these two things (take actual breaks)
// this could mean counting like how many times each number appears. Then return an object with that info. 
const countOccurrencesUsingDictionary = (nums) => {
  let dict = {};
  // 1, 1, 1, 3, 3 nums[i]
  // 0, 1, 2, 3, 4 i
  // dict[1] 
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] += 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
return dict;
}


// have to figure out how to do the running total. because 
// i have to return not just the number that occurs the most times,but the number of times it occurs. 
  // 1 
  // could increment runningTotal every time a dict key is incremeneted. But that doesn't tell me which number is being 
  // seen the most times. 
  // 2 i could have a different runningTotal for each number in
  // the nums array, but that would be too unwieldy. 
  // 3 i could just go through the hashmap, when the process is complete, and return the biggest value. 
  // 4 this reminds me of a previous function. if a number was 
  // bigger than the holding variable, we used that one.
   > runningTotal 
  // every time you increment, you can adjust the runningTotal. like if the value dict[nums[i]] is greater than the current total, then 
  // that becomes the total. 


nums = [1, 2, 3, 3, 4]
const countMaxOccurrences = (nums) => {
  let dict = {};
  let runningTotal = 0;


  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] += 1;
        if (dict[nums[i] > runningTotal]) {
          runningTotal = dict[nums[i]]
        }
    } else {
      dict[nums[i]] = 1;
      if (dict[nums[i] > runningTotal]) {
        runningTotal = dict[nums[i]]
      }
    }
  }
  runningTotal;
}




// a function that will return a dictionary, which contains all the consonants in a string 
// a consonant will be just any character that's not a vowel

const findAllConsonantsWithADictionary = (givenString) => {
  let lowString = givenString.toLowerCase();
  let dict = {};

  // can loop over the string and either recognize/increment or create/increment any character that is not a vowel
  for (var i = 0; i < lowString.length; i++) {
    // can use isLetterVowel to exclude vowels 
    if (!isLetterVowel(lowString[i])) {
      if (lowString[i] in dict) {
        dict[lowString[i]] += 1;
      } else {
        dict[lowString[i]] = 1;
      }
    }
  }

  return dict; 

}





let someString = "running"

const countVowels = (someString) => {
  let lowString = someString.toLowerCase();
  let vowelCount = 0;
  for (var i = 0; i < lowString.length; i++) {
   if (isLetterVowel(lowString.charAt(i))) {
     vowelCount += 1;
   }
  }
  return vowelCount;
}

// check out hash map data structure
// how should i return this info in js, whether an array or map or tuples
// so this can be either 1 to count all the vowels and tell you how many of each kind there are
// or 2 to count how many times a specific vowel appears. I think I'll go with 1, because
// then maybe I can use that function to build the next one.



// TO DO

// DOING

// DONE

// input-
// takes two strings

// output-
// the number of times a particular vowel appears. So actually it should take both the string
// and the desired vowel.


const countSpecificVowel = (givenString, givenVowel) => {
  // set a variable vowelCount
  // make a for loop
  // make an if statement inside that for loop
    // as the condition, see if charAt is that vowel. if so you can increment.
    // ? but how to account for case? just low case it for now
  // iterate over the string and increment vowelCount, each time the vowel is detected.
  let vowelCount = 0;
  let lowString = givenString.toLowerCase()
  for (var i = 0; i < lowString.length; i++) {
  // can check both, if the letter is a vowel (using isLetterVowel) and if it's that particular vowel
    if (isLetterVowel(lowString.charAt(i)) && lowString.charAt(i) == givenVowel) {
       vowelCount += 1
    }
  }
  return vowelCount
}


const countAllVowels = (givenString) => {

  var dict = {};

  dict["a"] = countSpecificVowel(givenString, "a");
  dict["e"] = countSpecificVowel(givenString, "e");
  dict["i"] = countSpecificVowel(givenString, "i");
  dict["o"] = countSpecificVowel(givenString, "o");
  dict["u"] = countSpecificVowel(givenString, "u");

  return dict;
}


  // var dict = {};
  // dict["a"] = countSpecificVowel(givenString, "a");





// set the dictionary with the vowels as keys and their frequency as elements 
// make a for loop and go over the string, 
// use a conditional to pick which vowel each character is, if any 
// if it's a vowel, increment that part of the dictionary 

// return the dictionary 

const countAllVowelsUsingDictionary = (givenString) => {
  let lowString = givenString.toLowerCase();
  var dict = {
    "a": 0,
    "e": 0,
    "i": 0,
    "o": 0,
    "u": 0
  };

  // testString = "alfalfa"
  for (var i = 0; i < lowString.length; i++) {
    if (lowString.charAt(i) in dict) {
      dict[lowString.charAt(i)] += 1;
    }

  }
  return dict; 
}








const isLetterVowel = (x) => {
  return (x == "a" || x == "e" || x == "i" || x == "o" ||x == "u");
}






const generateRandomNumber = (min, max) => {
     return Math.random() * (max - min) + min;
}


const generateRandomArray3 = (desiredLength) => {
    let newArray = [];
    for (var i = 0; i < newArray.desiredLength; i++) {
        newArray.push(generateRandomNumber(1, 10));
    }
    return newArray;
}


// 10
// initialize and reassign a variable with let and
// var without using the 'let' or 'var'

// 10
// semicolons on each line


const findMax = (nums) => {
    let biggestFound = 0;
    for (var i = 0; i < nums.length; i++) {
        if (num[i] > biggestFound) {
             biggestFound = num[i];
        }
    }
}





// input
// an array of numbers

// output
// an integer
