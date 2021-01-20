def solution(arr):
    answer = []
    idx = -1
    
    for i in arr :
        if idx == -1 :
            answer.append(i)
            idx = idx + 1
            continue
        if answer[idx] != i :
            answer.append(i)
            idx = idx + 1
            
    return answer
