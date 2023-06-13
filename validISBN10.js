function validISBN10(isbn) {
    if(isbn.length!=10){
      return false
    }
     aRR=isbn.split('')
    rArr1=[]
      for(let i=0;i<aRR.length;i++){
        current=aRR[i]
      if(current.match(/[A-Z]/)&&aRR.indexOf(current)!=9){
        return false
      }
      if(current.match(/[X]/)&&aRR.indexOf(current)===9){
        num = 10
        current = num
        rArr1.push(current*(+[i]+1))
      }else{
        rArr1.push(current*(+[i]+1))
      }
    }
    sum=rArr1.reduce((a,b)=>a+b)
    return sum%11==0
  }

console.log(validISBN10("1112223339"))//--> true
console.log(validISBN10("048665088X"))//--> true
console.log(validISBN10("1293000000"))//--> true
console.log(validISBN10("1234512345"))//--> false
console.log(validISBN10("1293"))//--> false