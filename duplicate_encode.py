def duplicate_encode(word):
  lst1 = list(word.lower())
  results = []
  for i in lst1:
   if lst1.count(i) > 1:
     results.append(')')
   if lst1.count(i) == 1:
     results.append('(')
  return ''.join(results)

print(duplicate_encode("din"))#"((("
print(duplicate_encode("recede"))#"()()()"
print(duplicate_encode("Success"))#")())())","should ignore case"
print(duplicate_encode("(( @"))#"))(("