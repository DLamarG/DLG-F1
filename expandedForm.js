function expandedForm(num) {
    let results = [];
   let nDA = num.toString().split('.')[0].split('');
   let nDlen = num.toString().split('.')[0].split('').length;
   let DA = num.toString().split('.')[1].split('');
   let count1 = 0;
   let count2 = 0;
   for(let i in nDA){
     count1++
     current = nDA[i];
     if(current&&current!='0'){
       results.push(current+'0'.repeat(nDlen-count1))
     }
   }
   for(let j in DA){
     count2++
     current2 = DA[j];
     if(current2&&current2!='0'){
       results.push(current2+'/1'+'0'.repeat(count2))
     }
   }
   let nums = results.join().replace(/\,/g, ' + ')
   return nums
 }

 console.log(expandedForm(807.304))//-->  '800 + 7 + 3/10 + 4/1000'
 console.log(expandedForm(1.24))//-->.  '1 + 2/10 + 4/100'
 console.log(expandedForm(4.28))//-->.  '4 + 2/10 + 8/100'
 console.log(expandedForm(7.304))//-->  '7 + 3/10 + 4/1000'