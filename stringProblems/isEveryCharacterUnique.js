


let str = "cat";

const isEveryCharacterUnique = (str) => {
    lowStr = str.toLowerCase(); 
    let dict = {};

    for (var i = 0; i < lowStr.length; i++) {
        if (lowStr.charAt(i) in dict) {
            return false; 
        } else {
            dict[lowStr.charAt(i)] = 1;
        }
    }

    return true;
}


// "a b c d e ... n"
//  0 1 2 3 4
//  i j
const everyCharUniqueForLoops = (str) => {
    let lowString = str.toLowerCase();

    for (var i = 0; i < lowString.length; i++){
        for (var j = i + 1; j < lowString.length; j++) {
            if (lowString[i] === lowString[j]) {
                return false;
            }
        }
    }

    return true;

}




console.log(everyCharUniqueForLoops("abcde"), "expect true");
console.log(everyCharUniqueForLoops("abcddde"), "expect false");
console.log(everyCharUniqueForLoops("aAbcde"), "expect false");
console.log(everyCharUniqueForLoops("a2vcde"), "expect true");



