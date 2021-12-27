

// replace any space with a %20
// if we had a string input of "Mr. John Smith", replace each of those 
// two spaces with %20, for an output of "Mr.%20John%20Smith". 

const replaceSpacesWithSpecialCharacter = (givenString) => {
    let result = ""
    for (var i = 0; i < givenString.length; i++) {
        if (givenString.charAt(i) !== " ") {
            result += givenString.charAt(i)
        } else {
            result += "%20"
        }
    }  
    return result
}

const checkIfAllCharactersUnique = (givenString) => {
    let dict = {};

    for (var i = 0; i < givenString.length; i++) {
        if (givenString.charAt(i) in dict ) {
            return false;
        } else {
            dict[givenString.charAt(i)] = 1;
        }
    }
    return true;
}


console.log(replaceSpacesWithSpecialCharacter("Mr. John Smith"));






// ? memo basics 

// const multipleChoiceSelect = (input) => {
//     switch(input){
//         case "a":
//             break;
//         case "b":
            
//             break;
//         case "c":
//             break;
//         default:

//     }
// }



// const multipleChoiceSelectWithIfs = (input) => {
//     if (input == "a") {
//         alert("a")
//     } else if (input == "b") {
//         alert("b")
//     } else if (input == "c") {
//         alert("b")
//     } else {
//         alert("default")
//     }
// }