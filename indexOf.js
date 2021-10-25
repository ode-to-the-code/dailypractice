
// takes an array and an index "i", and returns the value of 
// that index value in the array (if it exists there).


function indexOf(array, indexValue) {
    if (array[indexValue]) {
        return array[indexValue]
    } else {
    // this is a common way to indicate an incorrect result, it's a flag.
        return -1
    }
}


let array = [1, 2, 3];

console.log(indexOf(array, 4));
console.log(indexOf(array, 1));
