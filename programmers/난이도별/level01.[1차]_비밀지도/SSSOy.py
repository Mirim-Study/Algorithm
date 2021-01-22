def solution(n, arr1, arr2):
    answer = []
    length = len(arr1)
    
    for i in range(0, length) :
        st = str(bin(arr1[i] | arr2[i]))[2:]
        if len(st) < length :
            st = "".join(["0" for i in range(0, length - len(st))]) + st
        answer.append("".join(["#" if ch == '1' else " " for ch in st]))
        
    return answer
