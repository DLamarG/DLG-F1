def number(lines):
    import re
    numbered_chars = []
    count = 0
    if len(lines)==0:
        return numbered_chars
    for x in lines:
        count += 1
        if re.match(r'[\w]', x) or re.match('', x):
            numbered_chars.append(str(count)+':'+" "+x)
    return numbered_chars

print(number([]))#--> [], 'Empty array should return empty array'
print(number(["a", "b", "c"]))#--> ["1: a", "2: b", "3: c"], 'Return the correct line numbers'