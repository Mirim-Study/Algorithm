def solution(arr1, arr2):
    len1 = len(arr1)
    len2 = len(arr1[0])
    answer = [[arr1[i][j] + arr2[i][j] for j in range(0, len2)] for i in range(0, len1)]
    return answer
