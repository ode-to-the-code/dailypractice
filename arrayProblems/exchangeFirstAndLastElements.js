

// given an array, flip the first and last elements 


function exchangeFirstAndLast(arr){
    let firstEl = arr[0];
    let lastEl = arr[arr.length - 1];

    arr[0] = lastEl;
    arr[arr.length - 1] = firstEl;
}

let arr = [1, 3, 4, 5];
exchangeFirstAndLast(arr);
console.log(arr);