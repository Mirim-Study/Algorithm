def solution(N, stages):
    answer = []
    dic = {0:1.1}
    
    for i in range(1, N + 1) :
        cnt_success = 0
        cnt_fail = 0
        for j in stages :
            if j >= i : 
                cnt_success = cnt_success + 1
            if j == i : 
                cnt_fail = cnt_fail + 1
        if cnt_success == 0 :
            dic[i] = 0
        else :
            dic[i] = cnt_fail / cnt_success

    del dic[0]
    dic = sorted(dic.items(), key=(lambda x:x[1]), reverse=True)
    
    for item in dic :
        answer.append(item[0])
            
    return answer
