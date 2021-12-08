


// splice returns a new array. you call it on an array, and give it 
// an index number and the number of elements you want to splice off 
// the original array and put into a new array.
// it really does change the original array, taking the elements 
// out of that one and putting them into a new array. so 
// the name splice is apt. maybe slice just takes them out, we'll see. 






// i was curious to see if splice would return the last two 
// elements if i gave it the second to last index number. 
// it does return the element at that index too.
// console.log(["cat", "hat", "seuss", "baked goods"].splice(2, 2));


// arr = [1, 2, 3, 4]
// num = 3
function chunkArrays(arr, num) {
    const chunks = [];
    // arr = [].concat(...arr);
    

    while (arr.length) {
       chunks.push(arr.splice(0, num));
    }

    return chunks
}

console.log(chunkArrays([1, 2, 3, 4], 3))


// cards 
// (microquestions that come up while doing the function.
// the smaller the better).

// 1
// will this loop evaluate 0 to true or false?
// is an empty array truthy or falsy?
// how do you test if a value is true in the node terminal?
// while (items.length) {
//     chunks.push(
//       items.splice(0, size)
//     )
//   }
