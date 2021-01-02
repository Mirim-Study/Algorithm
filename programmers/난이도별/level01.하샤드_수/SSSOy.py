def solution(x):
    st = list(str(x))
    h = 0
    for i in st :
        h = h + int(i)
    return True if x % h == 0 else False
