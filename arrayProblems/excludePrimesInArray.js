

// find the sum of all the numbers in an array, but exclude prime numbers 
// a prime number is divisible by itself and the number 1. like 2, 3, 5

const sumAndExcludePrimes = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) 
            sum += arr[i];
    }

    return sum;
}



const isPrime = (num) => {
    if (num === 1) {
        return false;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(sumAndExcludePrimes([1, 2, 3, 4, 5]))



