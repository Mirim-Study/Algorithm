def solution(n, m):
    answer = [0, 0]
    min = n if n < m else m
    
    for i in range(1, min + 1) :
        if n % i == 0 and m % i == 0 :
            answer[0] = i;
    
    i = 1
    while True :
        if i % n == 0 and i % m == 0 :
            answer[1] = i
            break;
        i = i + 1
    
    return answer
