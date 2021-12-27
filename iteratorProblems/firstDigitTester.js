

// use forEach to test if every third number in an array has the 
// same first digit or not

// -see what the first digit of one of the numbers is 
// -see if the others do also 
// -have to select those numbers 


// how can you get the first digit of a number?


// how can you get the last digit of a number?
// 1234 % 10 = 4;
// 4 % 10 = 4;
// 551 % 10 = 1;



arr = [22, "cat", 34, "c", 2, 31, 7, 8, 37]

const firstDigitTester = (arr) => {
    let testDigit = arr[2] % 10;

    // arr.every(item => {
    //     return item % 10 == testDigit;
    // })

    // 

    console.log(arr.every(item => {
        return item % 10 == testDigit;
    }))
}


console.log(firstDigitTester(arr));