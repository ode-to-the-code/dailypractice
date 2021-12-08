

function checkRange(num, upperBound, lowerBound) {

    if (num < upperBound && num >= lowerBound){
        return true;
    } else {
        return false;
    }
}


console.log(checkRange(4, 5, 4));