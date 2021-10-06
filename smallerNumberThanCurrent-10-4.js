


// input nums=[8,1,2,2,3] 
// sorted = [1, 2, 2, 3, 8]
//           0  1  2  3  4
// output array= [4,0,1,1,3]

const arr = [1, 2, 3, 4];
const arr1 = arr;
const arr2 = [...arr]; // this is the ES6 way of cloning an array 
console.log(arr === arr1); // this one is true, bc they're pointing to the same memory space 
console.log(arr === arr2); // but this one will return false, bc they're pointing to different places in the memory



// hw finish functions quiz in 

const smallerNumbersThanCurrent = (nums) => {
    // step 1: clone the array and sort the cloned array 
    let sorted = [...nums];
    sorted.sort(function(a, b) { return a - b});

    // step 2: map the number to output, which will be the indexes 
    let dict = {};

    for (var i = 0; i < sorted.length)



}


// // nums = [1, 3, 2]
// const jadSort = (nums) => {
//     // loop over array 
//     // let sorted = [];

//     if (var i = 0; i < nums.length; i++) {

//     }
// }

// // hw
// // do bubblesort for jadsort (to use on the smallerNumberThanCurrent)
// // do the codeacademy quizzes, try before wednesday 





// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };




// let bubbleSort = (inputArray) => {
//     let len = inputArr.length; 
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j])
//         }
//     }
// }