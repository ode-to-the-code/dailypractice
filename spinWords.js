// function spinWords(string){
//   //TODO Have fun :)

//   return string.split("").reverse().join("");
// }



//  i'd like to use split to create an array of the 
// words in the string. 
// then, I can go over them with a for loop. If they are five or more letters, I can split, reverse, and join 
// them as strings. Then add them to the result string, which I will return at the end.


function spinWords(string){
  
    let break1 = string.split("");
    let result = "";
  
    
    
    if (!string.includes(" ") && string.length >= 5) {
       return break1.reverse().join("")
    }
    
    
    for (i = 0; i < break1.length; i++){
      if (break1[i].length >= 5){
        break1[i].split("").reverse().join("");
      } else {
        console.log("hi", break1[i])
        result += break1[i]
      }
    }
    return result;
  }