

// given an array, filter out the negative numbers

addNumbers(num1, num2, num3){

}

curryN(fn){
    return 
}

const a = curryN(addNumbers)
const b = 
const c 


let arr = [1, -3, 2, 11, 9];


const removeNegatives = (arr) => {
    let posArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            posArray.push(arr[i])
        }
    }
    return posArray;
}

console.log(removeNegatives(arr));




const sortFromSmallToLargest = (arr) => {
    return removeNegatives(arr).sort((num, num2) => 
         num - num2
    )
};



console.log(sortFromSmallToLargest(arr))