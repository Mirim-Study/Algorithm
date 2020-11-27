def solution(n):
    answer = 0
    array = [int(x) for x in list(str(n))]
    array.sort(reverse = True)
    return int("".join([str(x) for x in array]))
