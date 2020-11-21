def solution(n):
    answer = list(str(n))
    answer.reverse()
    answer = [int(i) for i in answer]
    return answer
