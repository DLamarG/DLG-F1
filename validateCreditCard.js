function validate(str) {
    let resultRR = [];
      let no_space_str = str.split('').reverse().join('');
      let count = 0;
      for(let x in no_space_str){
        current = no_space_str[x];
        if(current && count%2==0){
          resultRR.push(current)
        }
        if(current && count%2!=0){
          newNum = current*2 > 9 ? (current*2)-9 : current *2
          resultRR.push(newNum)
        }
        count++
      }
      let cc_num_total = eval(resultRR.toString().replace(/[\,]/g, '+'))
      return cc_num_total%10===0 ? "The number is valid!" : "The number is invalid!"
    }


  console.log(validate("123"))//--> false
  console.log(validate("1"))//--> false
  console.log(validate("2121"))//--> true
  console.log(validate("1230"))//--> true