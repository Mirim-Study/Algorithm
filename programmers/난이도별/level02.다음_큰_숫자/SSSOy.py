def solution(n):
    answer = 0
    cnt = cntOne(n)
    
    while True :
        n = n + 1
        if cnt == cntOne(n) :
            answer = n
            break

    return answer

def cntOne(n) :
    st = str(bin(n))[2:]
    return st.count('1')
