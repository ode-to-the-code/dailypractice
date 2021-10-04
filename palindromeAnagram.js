//  given a string, check if it's a permutation of a palindrome
//  "tact coa" 
// ap taco cat pa 
// first, given a string, check if it's a palindrome 
// palindrome characteristics- 
// -if it has an odd number of letters, all the characters should appear twice except for one character, the middle one, which can 
// only show up once. 
// -what if it has even numbers? koppok

// check if a string is a palindrome. Use a dictionary.
// what would meant that it's NOT a palindrome?
    // -if it has an odd number of characters, and any of the 
    // characters appear more than once. 

// miniproblems- how do i check if any of the keys in the dictionary are lower than 2? or either 2 or anything else
// check the length of a dict/hashmap
// what was going on with the closure thing? the conditional in lines 80-84, i originally had put outside the big 'if' statement that starts on 28. but I got an error saying that the nonceCount variable wasn't defined. I googled it and found a stackoverflow saying that a similar problem was due to declaring the variable in a closure, making it unavailable outside that scope/context. 

// const checkPalindromeWithHashmap = (givenString) => {

//     let dictOdd = {};


//     //1. this is to check if a given string has an odd number of letters. If that's the case, then I'll use the for loop to stock the dictionary with the characters and how often they appear. Finally, I'll use the second for loop to check if any characters appear more than twice- that is, if any keys of dictOdd have a value of 1.  



// why does the main function return undefined, though the callback works? I had to put return in the body, before calling the callback. But isn't it implied that the function should return 
// whatever happens in that line of code, in the body? 
// why did wasn't it working before? (have to pass the parameter even to the callback function. since the callback wasn't passed anything, it did still get invoked, but then hit the first line 
// in the callback where that argument was suppsoed to be used and broke there. the error said givenString wasn't defined. From the callback's point of view, the givenString variable didn't exist.)


const checkPalindromeWithHashmap = (givenString) => {

    return (checkOddLengthPalindrome(givenString) || checkEvenLengthPalindrome(givenString))
}



// 0123
// "oppo", 
// 0123
// "ABBA"
// must have even number of letters 
//  the middle two must be the same. in fact, every opposing letter must be the same. 
// so i have to write something that will compare the first and last characters in the string to see if they're the same. But then
// gradually increment inwards somehow. 

const checkEvenLengthPalindrome = (givenString) => {
    // anki this- used to just be givenString.length - 1

    for (var i = 0; i < givenString.length - 1; i++) {

           if (givenString[i] !== givenString[(givenString.length - 1) - i]) {

                return false

        } else {
            return true
        }
    }
}





const checkOddLengthPalindrome = (givenString) => {
    let dictOdd = {};

    console.log("given string2", givenString)

    //1. this is to check if a given string has an odd number of letters. If that's the case, then I'll use the for loop to stock the dictionary with the characters and how often they appear. Finally, I'll use the second for loop to check if any characters appear more than twice- that is, if any keys of dictOdd have a value of 1.  


    if (givenString.length % 2 !== 0) {

    console.log("hi1")

    for (var i = 0; i < givenString.length; i++) {
    console.log("hi2")
        if (givenString.charAt(i) in dictOdd) {
            dictOdd[givenString.charAt(i)] += 1;
        } else {
            dictOdd[givenString.charAt(i)] = 1;
        }
    }

    let dictOddKeysLength = Object.keys(dictOdd).length;
    let nonceCount = 0;
    let twiceCharacterCount = 0;

    for (var i = 0; i < dictOddKeysLength; i++) {


    // one and only one of the letters/keys should appear once;   all of the others should appear exactly twice.
    //  cycle through, and they should all appear twice. for the 
    // one that appears once, i can have a counter variable ready. 
        if (dictOdd[Object.keys(dictOdd)[i]] == 2 ) {
        console.log("hi4")
        console.log(dictOdd[Object.keys(dictOdd)[i]])
            twiceCharacterCount += 1;
            console.log("hi5")
        }
            else if (dictOdd[Object.keys(dictOdd)[i]] == 1) {
                console.log("hi6")

                nonceCount += 1;
            } else {
                return false;
            }
        }


        if (nonceCount == 1 && twiceCharacterCount == dictOddKeysLength - 1) {
            return true
        } else {
            return false
        }

        }



}



console.log(checkPalindromeWithHashmap("kayakk"));
// console.log(checkOddLengthPalindrome("civic"));
// console.log(checkEvenLengthPalindrome("oppo"));



