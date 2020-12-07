def solution(arr, divisor):
    arr.sort()
    answer = [i for i in arr if i % divisor == 0]
    if not answer :
        answer = [-1]
    return answer
