def solution(phone_number):
    #return '*' * (len(phone_number) - 4) + phone_number[-4:]
    answer = [ch if idx < 4 else '*' for idx, ch in enumerate(reversed(phone_number))]
    return ''.join(reversed(answer))
