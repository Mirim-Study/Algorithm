def solution(n):
    answer = ''
    
    for i in range(0, int(n / 2)) :
        answer += "수박"
    if(n % 2 != 0) :
        answer += "수"
    
    return answer
