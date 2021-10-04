
// anki-
// how to create a string out of a dictionary's keys and values
// how to concat the dictionary to the string, like with result 
// why is it dict[givenString[i]] instead of just dict[i]?
// why is it result += at the beginning instead of the end of the line? (scs also)
// how to concat the letter and number at the end. so it returns 'h1b2' instead 
// of '12'
// index out of bounds exception: when you try to read from the 
// memory in a place that doesn't exist, 
// like if you have an string with three characters 
// let cat = "cat"
// cat.charAt(0). we'll be 'out of bounds' if we try to access charAt(4) or something,
// that's more than exists. 
// 9:41 - it's good to write code that is consistent in style and
// voice (syntax choices and readability)

//  if you have a string with say "aabcccccaaa", it should 
// return "a2b1c5a3"
// what's being returned is called the 'sum compressed string'.
// If the SCS is not smaller than the original string, then we just 
// return the original string. 


// want to return a compressed version of a string, like 
// "a2d3c1" for "aadddc". If it's shorter. 


const stringCompression = (givenString) => {
// aaabbabbbaaab
// a3b2a1b3a3b1
// a3b2a
let result = "";
let count = 1;

    for (var i = 0; i < givenString.length - 1; i++) {
       let currentChar = givenString.charAt(i);
       let nextChar = givenString.charAt(i + 1);
       if (currentChar !== nextChar) {
        result += currentChar + count;
        count = 1;
       } else {
        count += 1;
       }
      
    }

    if (result.length < givenString.length) {
        console.log("hi")
        return result;
    } else {
        console.log("hi2")
        return givenString;
    }
}


console.log(stringCompression("hellohellohello"))


let testStrings = ["aabb", "aabbaabbaa", "aaab", "aAbbB", "abcd", "a"]
let expectedOutputs = ["a2b2", "a2b2a2b2a2", "a3b1", "a2b3", "abcd", "a" ]

const makeSandwich = (bread, PB, jelly, knife) => {

}




// const stringCompression = (givenString) => {
//     let dict = {};
//     let scs = "";

//     // aaabbabbbaaab
//     // a3b2a1b3a3b1
//     // a3b2a


//     // step 1: I fill up the dictionary with keys and values 
//     // that correspond to the letters of the string and their frequency
//     for (i = 0; i < givenString.length; i++) {
//         if (givenString.charAt(i) in dict) {
//             dict[givenString[i]] += 1;
//         } else {
//             dict[givenString[i]] = 1;
//         }
//     }



//     // step 2: I'll create a new string, using the dictionary.

//     for (var i = 0; i < Object.keys(dict).length; i++){
//         scs += Object.keys(dict)[i] + dict[Object.keys(dict)[i]]
//     }



//     // step 3:
//     // if the compressed string is smaller than the original string,
//     // then i'll return it.


//     if (scs.length < givenString.length) {
//         return scs; 
//     } else {
//         console.log("Compression was not helpful!")
//         return false;
//     }


// }


// // console.log(stringCompression("helllllllllo"));
// console.log(stringCompression("h"));
