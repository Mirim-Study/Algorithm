def solution(s):
    answer = sorted(list(s), reverse = True)
    return ''.join(answer)
