
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


// ["floating", "boats", "fling", "floormats"]
//  ["bear", "beer", "apple"]
// can break the strings 
// i need to identify the prefix of each string. i could grab one and compare it to the others, like take the first two index positions. But how to know how much to compare? 



function prefixStringArray() {
    
}



function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    
    for (let i = 0; i < strs[0].length; i++) {
      for (let str of strs) {
        if (str[i] !== strs[0][i]) {
          return str.slice(0, i);
        }
      }
    }
    
    return strs[0];
  }