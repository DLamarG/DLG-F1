def string_transformer(s):
    word_lst = list(s)
    change_wrd = ''.join([x.upper() if x.islower() is True else x.lower() if x.isupper() is True else x for x in word_lst]).split(' ')
    change_wrd.reverse()
    return ' '.join(change_wrd)


print(string_transformer('Example string'))# 'STRING eXAMPLE'