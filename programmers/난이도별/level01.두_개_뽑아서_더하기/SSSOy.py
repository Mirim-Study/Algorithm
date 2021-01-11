def solution(numbers):
    answer = set()
    
    for i in range(0, len(numbers)) :
        for j in range(i + 1, len(numbers)) :
            answer.add(numbers[i] + numbers[j])
    
    return sorted(answer)
