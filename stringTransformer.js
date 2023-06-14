function stringTransformer(str) {
    let upp = /[A-Z]/
    let low = /[a-z]/
    let results = [];
    let strRR = str.split('')
    for(let char in strRR){
      current = str[char]
      if(upp.test(current)){
        results.push(current.toLowerCase())
      }
      if(low.test(current)){
        results.push(current.toUpperCase())
      }
      if(current === ' '){
        results.push(current)
      }
    }
    return results.join('').split(' ').reverse().join(' ')
  }

console.log(stringTransformer('Example string'))//--> 'STRING eXAMPLE'