def solution(d, budget):
    d.sort()
    n = 0
    
    for i in range(0, len(d)) :
        if(n + d[i] > budget) :
            return i
        n = n + d[i]
        
    return len(d)
