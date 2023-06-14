
def factorial(n):
    if n==0:
        return 1
    factors = []
    for num in range(1,n+1):
        factors.append(str(num))
    factorial = eval('*'.join(factors))
    return factorial

print(factorial(0))#--> 1
print(factorial(1))#--> 1
print(factorial(4))#--> 24
print(factorial(7))#--> 5040
print(factorial(17))#--> 355687428096000