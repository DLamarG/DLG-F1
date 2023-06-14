def square_digits(num):
    lst = list(str(num))
    lst2 = [int(x)*int(x) for x in lst]
    return int("".join(map(str, lst2)))

print(square_digits(3212))#-->  9414
print(square_digits(2112))#--> 4114
print(square_digits(0))#-->  0