
// return true if the number of vowels in a given string is even
// count how many vowels
let str = "cat went home"
const returnTrueIfVowelsEven = (str) => {
    let vowelCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            vowelCount++;
        }
    }

    return vowelCount % 2 == 0;

}

console.log(returnTrueIfVowelsEven(str));