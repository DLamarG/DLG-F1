function groupByCommas(n) {
    let NumStr = n.toString()
    if(NumStr.length==1 || NumStr.length==2 || NumStr.length==3){return NumStr}
    if(NumStr.length==4){return NumStr.slice(0, 1)+','+NumStr.slice(1,)}
    if(NumStr.length==5){return NumStr.slice(0, 2)+','+NumStr.slice(2,)}
    if(NumStr.length==6){return NumStr.slice(0, 3)+','+NumStr.slice(3,)}
    if(NumStr.length==7){return NumStr.slice(0, 1)+','+NumStr.slice(1,4)+','+NumStr.slice(4,)}
    if(NumStr.length==8){return NumStr.slice(0, 2)+','+NumStr.slice(2,5)+','+NumStr.slice(5,)}
    if(NumStr.length==9){return NumStr.slice(0, 3)+','+NumStr.slice(3,6)+','+NumStr.slice(6,)}
    if(NumStr.length==10){return NumStr.slice(0, 1)+','+NumStr.slice(1,4)+','+NumStr.slice(4,7)+','+NumStr.slice(7,)}
  }

console.log(groupByCommas(1))//--> '1'
console.log(groupByCommas(10))//-> '10'
console.log(groupByCommas(100))//--> '100'
console.log(groupByCommas(1000))//--> '1,000'
console.log(groupByCommas(10000))//--> '10,000'
console.log(groupByCommas(100000))//--> '100,000'
console.log(groupByCommas(1000000))//--> '1,000,000'
console.log(groupByCommas(35235235))//--> '35,235,235'