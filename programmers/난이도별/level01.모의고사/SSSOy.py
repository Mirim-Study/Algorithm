def solution(answers):
    answer = []
    score = [0, 0, 0]
    st1 = [1, 2, 3, 4, 5]
    st2 = [2, 1, 2, 3, 2, 4, 2, 5]
    st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for idx, value in enumerate(answers) :
        if (value == st1[idx % len(st1)]) :
            score[0] += 1
        if (value == st2[idx % len(st2)]) :
            score[1] += 1
        if (value == st3[idx % len(st3)]) :
            score[2] += 1
    
    for idx, value in enumerate(score) :
        if (value == max(score)) :
            answer.append(idx + 1)
    
    return answer
