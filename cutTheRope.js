function cutTheRopes(a) {
    let chkL = a.length
    let rRR = [];
    let min = Math.min(...a)
    while(a.length > 0){
      let rpNum = a.length
      let rpNum1 = a.filter(a=> a-min >0 ? a-min : '')
      let newMin = Math.min(...rpNum1)
      min = newMin
      a = rpNum1
      rRR.push(rpNum)
    }
    return rRR
  }

console.log(cutTheRopes([3, 3, 2, 9, 7]))//---> [5, 4, 2, 1])
console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]))//---> [8, 6, 4, 1])
console.log(cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]))//---> [10, 9, 6, 5, 3, 1])