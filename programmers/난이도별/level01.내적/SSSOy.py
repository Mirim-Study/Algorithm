def solution(a, b):
    answer = []
    
    for i in range(0, len(a)) :
        answer.append(a[i] * b[i])
        
    return sum(answer)
