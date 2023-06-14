function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   let resArr = []
   let newCharArr = text.toLowerCase().split('')
   for(let i=0;i<newCharArr.length;i++){
     current  = newCharArr[i]
     if (current.match(/[a-z]/g)){
       resArr.push(alphabet.indexOf(`${current}`)+1)
     }
   }
   return resArr.join(' ')
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))//-->  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."))//-->  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    