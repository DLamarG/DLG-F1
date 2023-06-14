function duplicateEncode(word){
    let wordRR = word.toLowerCase().split('');
    let $dict = {};
    for(let i=0;i<wordRR.length;i++){
      current = wordRR[i]
      if(current in $dict){
        $dict[current] += 1
      }else{
        $dict[current] = 1
      }
    }
   let encodedRR = [];
   let decodeStr = word.toLowerCase().split('')
   for (let j=0;j<decodeStr.length;j++){
     current2 = decodeStr[j]
     if($dict[current2]){encodedRR.push($dict[current2])}
   }
   let encoded = encodedRR.map(x=> x > 1 ? ')' : '(')
   return encoded.join('')
 }

console.log(duplicateEncode("din"))//-->.  "(((");
console.log(duplicateEncode("recede"))//--> "()()()");
console.log(duplicateEncode("Success"))//--> ")())())","should ignore case");
console.log(duplicateEncode("(( @"))//-->  "))((");