// "Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz."

// a loop with a conditional inside?



for (let i = 1; i <= 100; i++) 
    if (i % 3 == 0) {
        console.log("Fizz! " + "Number: " + i)
    } else if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    }


// I set a 25 min pomodoro and solved in 17 min

// -practice writing for loops, wasn't sure on syntax. Like the iterating part and elsif/else if, etc. 

// -within the else if, wasn't sure about which equal to use. 

// -i wonder if I have to put the elseif for multiples of 5 before the one for multiples of 5 and 3 combined.

