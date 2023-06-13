def expanded_form(num):
    results = []
    front = str(num).split('.')[0]
    k = len(str(num).split('.')[0])
    back = str(num).split('.')[1]
    count1 = 0
    count2 = 0
    for i in front:
      count1 += 1
      if i and i!='0':
        results.append(i+('0'*(k-count1)))
    for e in back:
      count2 += 1
      if e and e!='0':
        results.append(e+'/'+'1'+('0'*(count2)))
    return ' + '.join(results)   

print(expanded_form(1.24))# '1 + 2/10 + 4/100')
print(expanded_form(7.304))# '7 + 3/10 + 4/1000')
print(expanded_form(0.04))# '4/100')
print(expanded_form(807.304))# '800 + 7 + 3/10 + 4/1000')