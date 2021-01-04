def solution(num):
    answer = 0
    
    while num != 1 and answer <= 500:
        num = num / 2 if num % 2 == 0 else num * 3 + 1
        answer = answer + 1
    
    return answer if answer <= 500 else -1
