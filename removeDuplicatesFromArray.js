

// takes an array and removes duplicates if any exist

function removeDuplicatesFromArray(array) {
    let dict = {};

    for (var i = 0; i < array.length; i++) {
// if an element is in the dictionary we have to remove it 
        if (array[i] in dict) {
// here we have to remove the 'i' element from the array
            deleteAtIndex(array, i)
        } else {
            dict[array[i]] = 1;
        }
    }

    return array;
}

function deleteAtIndex(array, index) {
    array.splice(index, 1)
}


let array = [1, 2, 3];
let array2 = [1, 2, 2, 3];

console.log(removeDuplicatesFromArray(array))
console.log(removeDuplicatesFromArray(array2))


