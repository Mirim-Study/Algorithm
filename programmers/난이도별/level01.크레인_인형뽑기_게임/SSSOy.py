def solution(board, moves):
    answer = 0
    stack = []
    
    for i in moves : 
        i = i - 1
        for j in board :
            if j[i] != 0 :
                stack.append(j[i])
                j[i] = 0
                length = len(stack) - 1
                
                if length > 0 : 
                    if stack[length] == stack[length - 1] :
                        del stack[length]
                        del stack[length - 1]
                        answer = answer + 2
                break
    
    return answer
