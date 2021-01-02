def solution(n):
    answer = -1
    sqrt = n ** 0.5
    if sqrt.is_integer() :
        sqrt = sqrt + 1
        answer = sqrt ** 2
    return answer
