

// return smallest and largest numbers in an array 

// arr = [1, 2, 3]
function returnSmallestAndLargestNumsInArray(array1){
    array1.sort()
    return `${array1[0]} + " and " + ${array1[array1.length - 1]}`
}


function fasterSmallLargeFinder(arr){
        let max = Number.NEGATIVE_INFINITY;
        let min = Number.POSITIVE_INFINITY;
        for (var i = 0; i < arr.length; i++){
            if (arr[i] >= max){
                max = arr[i]
            } 
            if (arr[i] <= min) {
                min = arr[i]
            }
        }
        return `Max: ${max}, Min: ${min}`; 
}

console.log(fasterSmallLargeFinder([1, 2, 3, 4]));

// arr = [3, 2, 1]

function getMaximum(arr){
    let max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= max){
            max = arr[i]
        }
    }
    return max; 
}


function getMinimum(arr){
    let min = Number.POSITIVE_INFINITY;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] <= min){
            min = arr[i]
        }
    }
    return min;
}

console.log(getMinimum([-1, -2, -4, -9]));
// console.log(getMaximum([-1, -2, -4, -9]));