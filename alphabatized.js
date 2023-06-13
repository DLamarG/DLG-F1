function alphabetized(s) {
    if(/[a-z0-9]+/g.test(s)===false){return ""}
    let noSpaceStr = s.replace(/[\s]/g, '');
    let newStrArr = noSpaceStr.split('');
    let charGroups = [];
    let wrkArray = [...newStrArr];
    while(wrkArray.length > 0){
      let compLetter = wrkArray.shift();
      let matches = newStrArr.filter(x=>{
        if(x===compLetter.toLowerCase() || x===compLetter.toUpperCase()){
          return x
        }
      })
      let strOfChars = matches.join('');
      charGroups.push(strOfChars)
    }
    let noDuplicates = new Set(charGroups.sort())
    let newArrayOfLett = [...noDuplicates]
    let sorted = newArrayOfLett.sort((a, b) => a.localeCompare(b))
    return sorted.join('')
  }

  console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')