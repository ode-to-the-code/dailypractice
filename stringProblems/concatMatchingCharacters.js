

// minCat("Hello", "Hi") → "loHi"
// minCat("Hello", "java") → "ellojava"
// minCat("java", "Hello") → "javaello"

// compare the lengths of the strings 
// make them the same size
// concatenate them 

const concatMatchingCharacters = (str1, str2) => {
    // compare them 
    let lengthDiff = 0;
    let largerString = "";
    let smallerString = "";


    if (str1.length > str2.length) {
        lengthDiff = str1.length - str2.length;
        largerString = str1;
        smallerString = str2;
    } else if (str2.length > str1.length) {
        lengthDiff = str2.length - str1.length;
        largerString = str2;
        smallerString = str1;
    }


    let trimmedLargerString = largerString.substring(lengthDiff - 1);
    
    return largerString + smallerString;

}

// if the strings are already the same length 

console.log(concatMatchingCharacters("cat", "elephant"));





// const vampire = {
//     name: 'Dracula',
//     residence: 'Transylvania',
//     preferences: {
//         day: 'stay inside',
//         night: 'satisfy appetite'
//     }
// };