var number=function(array){
    let numberedArray = [];
    let count = 0;
    if(array.length===0){return numberedArray}
    for(let letter in array){count++
      if(letter){
        numberedArray.push(count+':'+' '+array[letter])
      }
    }
    return numberedArray
  }

console.log(number([]))//--> [], 'Empty array should return empty array'
console.log(number(["a", "b", "c"]))//--> ["1: a", "2: b", "3: c"], 'Return the correct line numbers'                
