def solution(s, n):
    answer = ''
    
    for ch in s :
        i = ord(ch)
        if(ch == ' ') :
            answer += " "
            continue
        for j in range(0, n) :
            if(i == 122 or i == 90) :
                i -= 25
                continue
            i += 1
        answer += str(chr(i))
    
    return answer
