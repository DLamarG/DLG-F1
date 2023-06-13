function numbersOfLetters(integer) {
    let result1 = [];
    const numbers = { '0':"zero", '1':"one", '2':"two", '3':"three", '4':"four", '5':"five", '6':"six", '7':"seven", '8':"eight", '9':"nine", '10':'onezero', '11':'oneone', '12': 'onetwo', '13': 'onethree', '14':'onefour', '15':'onefive', '16':'onesix', '17':'oneseven', '18':'oneeight', '19':'onenine', '20':'twozero'};
    let strNum = integer.toString().split('')
    for (let i =0;i<strNum.length;i++){
      current = strNum[i]
      if (numbers[current]){
        result1.push(numbers[current])
      }
    }
    let results3 = result1.join('').split(' ')
    let last = results3[results3.length -1];
    while(last != 'four'){
      word = last.split(' ')
      for(let i=0;i<word.length;i++){
        current = word[i].length
        if(numbers[current]){
          results3.push(numbers[current])
          last = numbers[current]
        }
      }
    }
    return results3
  }

  console.log(numbersOfLetters(1))//--> ["one", "three", "five", "four"]);
  console.log(numbersOfLetters(12))//--> ["onetwo", "six", "three", "five", "four"]);
  console.log(numbersOfLetters(37))//--> ["threeseven", "onezero", "seven", "five", "four"]);
  console.log(numbersOfLetters(311))//--> ["threeoneone", "oneone", "six", "three", "five", "four"]);
  console.log(numbersOfLetters(999))//--> ["nineninenine", "onetwo", "six", "three", "five", "four"]);

