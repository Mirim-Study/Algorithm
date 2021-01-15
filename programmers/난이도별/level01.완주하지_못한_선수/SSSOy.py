def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    
    for idx, player in enumerate(completion) :
        if(player != participant[idx]) :
            answer = participant[idx]
            break
        
    return answer if answer != "" else participant[len(participant) - 1]
