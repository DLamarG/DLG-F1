def check_string(func):
    def wrapper(cc):
        if len(cc)==0:
            return cc
        if len(cc) <=4:
            return cc
        front = len(cc[0:len(cc)-4])
        back = cc[len(cc)-4:]
        return func(front*"#"+back)
    return wrapper

@check_string
def maskify(cc):
     return cc


print(maskify(""))
print(maskify("123"))
print(maskify("SF$SDfgsd2eA"))
