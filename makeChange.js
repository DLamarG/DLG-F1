const makeChange = (amount) => {
    let temp = 0
    temp = amount
    let resARR = []
    let HD = Math.floor(temp / 50);
    if (HD > 0){temp -= (HD*50);resARR.push('H'.repeat(HD));}
    let QU = Math.floor(temp/25);
    if(QU > 0){temp -= (QU*25);resARR.push('Q'.repeat(QU));}
    let DI = Math.floor(temp/10);
    if(DI > 0){temp -= (DI*10);resARR.push('D'.repeat(DI));}
    let NI = Math.floor(temp/5);
    if(NI > 0){temp -= (NI*5);resARR.push('N'.repeat(NI));}
    let P = Math.floor(temp/1);
    if(P > 0){temp -= (P*1);resARR.push('P'.repeat(P));}
    let changeRR = resARR.join('').split('');
    let LSCH = {};
    for(let i=0;i<changeRR.length;i++){
      current = changeRR[i]
      if(current in LSCH){
        LSCH[current] += 1
      }else{
        LSCH[current] = 1
      }
    }
    return LSCH
  };

  console.log(makeChange(90))
  console.log(makeChange(57))
  console.log(makeChange(23))
  console.log(makeChange(53))