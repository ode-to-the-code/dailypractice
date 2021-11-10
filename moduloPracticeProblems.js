

// practice times-
// wednesday at 4pm, review anki cards, 2 or 3 pomodoros 
// thursday at 11am, work on printClock for 3 pomodoros 
// friday at 12pm, make new anki cards 

// prints all even numbers from 0 till the number that's passed in

// num = 10
// print out 2, 4, 6, 8, 10
function printAllEvenNumbers(num){

    for (var i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
        } 

    }
}

// printAllEvenNumbers()

// isDivisibleByN takes in two numbers, n and num, and returns true
// if num is divisible by n 

function isDivisibleByN(num, n) {
    // if (num % n == 0) {
    //     return true 
    // }

    // num % n == 0 ? true : false 

    return num % n == 0; 
}

// printClock takes in a number of seconds and gives back that
// number in hours, minutes and seconds. use modulo 

// 125

// 5000 % 60 = however many are left over would be the seconds right?
// 5000 / 60 = 83.3 



// 5000
function printClock(givenSeconds) {
    let leftoverSeconds = givenSeconds % 60 
}


function isStringEmpty(givenString) {
    // return givenString === "" 
    return givenString.length == 0
}


// takes in two non-negative integers, and check if one or the other (but not both) is 
// a multiple of seven or eleven 

function checkForOneMultipleOfSevenOrEleven(a, b){
    let aCorrectMultiple = a % 7 == 0 || a % 11 == 0;
    let bCorrectMultiple = b % 7 == 0 || b % 11 == 0;

    if (aCorrectMultiple && bCorrectMultiple){
        return false 
    } else if (aCorrectMultiple || bCorrectMultiple) {
        return true 
    } else {
        return false
    }
}

// write a program to capitalize the first letter of a given string 

// cat
function capitalizeFirstLetter(givenString) {
    return  givenString[0].toUpperCase() + givenString.slice(1)
}



console.log(capitalizeFirstLetter("dog"))




// capitalize the first letter of every word in a string (another method)

function capitalizeFirstLetterOfEachWord(givenString) {

}