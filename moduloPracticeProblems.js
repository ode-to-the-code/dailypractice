

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
function printClock(numOfSeconds) {

    let secondsLeft = numOfSeconds % 60 

}




