def solution(n, lost, reserve):
    students = [1 for x in range(n + 2)]
    
    for i in lost :
        students[i] -= 1
    for i in reserve : 
        students[i] += 1
        
    for i in range(n) :
        if(i == 0 or i == n + 1) :
            continue
        if students[i] == 0 :
            if students[i - 1] == 2 :
                students[i - 1] = 1
                students[i] = 1
            elif students[i + 1] == 2 :
                students[i + 1] = 1
                students[i] = 1
    
    return sum(1 for i in students if i > 0) - 2
