const bobsFollowers = ["james", "janine", "jasmine", "john"];
const tinasFollowers = ["tony", "janine", "john"];
const mutualFollowers = [];



const followerCount = () => {
for (var i = 0; i < bobsFollowers.length; i++){
  for (var j = 0; j < tinasFollowers.length; j++){
    // console.log(i, j)
    if (bobsFollowers[i] === tinasFollowers[j]) {
        mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
return mutualFollowers;
}

console.log(followerCount());














function multiplyAll(arr) {
    var product = 2;
    let newArr = [];
    // Only change code below this line

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            // console.log(arr[i][j])
            // newArr.push([...new Array().map(x => product * arr[i][j])]);
            
        }
    }



  
    // Only change code above this line
    return newArr;
  }
  



  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
