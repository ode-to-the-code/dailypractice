
// It takes a number, and also one array. It returns one array. it chunks
// the numbers within the given array into individual arrays that do not exceed 
// the size of the given number. 
// 
// ([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]

function chunkArrays(num, arr){
    // 
}


function chunk (items, size) {  
    const chunks = []
    items = [].concat(...items)
  
    while (items.length) {
      chunks.push(
        items.splice(0, size)
      )
    }
  
    return chunks
  }
  
  // Example
  
  const items = [1, 2, 3, 4, 5, 6, 7, 8]