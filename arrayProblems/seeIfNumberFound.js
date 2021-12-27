
// take in a number 'target' and one array of numbers and search 
// for that target in the array, returning true if it's found and false 
// if not.
// don't use js library functions.

function seeIfNumberFound(target, arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return true
        }
    }

    return false 
}

console.log(seeIfNumberFound(3, [1, 4, 6, 3]));