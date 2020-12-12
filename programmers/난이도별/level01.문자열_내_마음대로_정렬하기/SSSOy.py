def solution(strings, n):
    strings.sort(key = lambda e: (e[n], e))
    return strings
