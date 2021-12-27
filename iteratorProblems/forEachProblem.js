

// print every 3rd element 

// arr = [33, 21, 4, 09, 222, 64, 17, 58, 19];

// arr.forEach((num, index) => {
//     (index + 1) % 3 == 0 ? console.log(num) : false;
// })


// arr.forEach(num => {
//     num % 2 == 0 ? console.log(num) : false;
// })

// console.log(arr.filter((num, index)  => {
//     return ((index + 1) % 3 == 0) && (num % 2 == 0) ? num : null;
// }));

// hw
// 1pm
// 9am thursday

// push to github 

// check from an array whether all of them have the same 
// rightmost digit, return true if so

// -find the digit to compare to  
// -do they have the same rightmost digit


let arr = [24, 34, 55];
// let lastDigit = arr[0] % 10;

const lastDigitTester = (arr) => {
    let lastDigit = arr[0] % 10;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 !== lastDigit) {
            // console.log( "false", arr[i])
            return false;
        }
    }
    

    // console.log( "true", arr[i])
    return true;

}

console.log(lastDigitTester([24, 34, 234]));

