// check from an array whether all of them have the same 
// rightmost digit, return true if so


let arr = [24, 34, 55];

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

