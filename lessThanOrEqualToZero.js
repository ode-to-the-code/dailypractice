

function lessThanOrEqualToZero(num) {
    return num <= 0;
}


function areTwoNumbersEqual(num1, num2) {
    return num1 === num2; 
}


// if both are <= 0, and 
function andOperatorTest(num1, num2) {
    return areTwoNumbersEqual(num1, num2) && lessThanOrEqualToZero(num1) && lessThanOrEqualToZero(num2)
}