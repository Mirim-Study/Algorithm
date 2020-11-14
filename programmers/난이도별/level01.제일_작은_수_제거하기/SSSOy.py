def solution(arr):
    if (len(arr) == 1) :
        return [-1]
    
    min_num = min(arr)
    
    for i in arr :
        if (i == min_num) :
            arr.remove(i)
    
    return arr
