def solution(s):
    answer = [0, 0]
    
    while(s != "1") :
        answer[0] = answer[0] + 1
        answer[1] = answer[1] + s.count("0")
        s = s.replace("0", "")
        s = binary(len(s))
    
    return answer

def binary(i) :
    s = ""
    while(i > 0) :
        s = s + str(int(i % 2))
        i = int(i / 2)
    return s
