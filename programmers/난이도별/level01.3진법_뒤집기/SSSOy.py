def solution(n):
    answer = 0
    st = ""
    
    while n > 0 :
        st = st + str(int(n % 3))
        n = int(n / 3)
        
    n = 1
    
    for i in range(len(st), 0, -1) :
        answer = answer + int(st[i - 1]) * n
        n = n * 3
        
    return answer
