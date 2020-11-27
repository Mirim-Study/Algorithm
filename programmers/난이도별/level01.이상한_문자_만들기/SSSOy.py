def solution(s):
    s = s.upper()
    answer = ''
    string = ''
    var = []

    for i in list(s) :
        string = string + i
        var = [ch if idx % 2 == 0 else ch.lower() for idx, ch in enumerate(string)]
        if(i == " ") :
            answer = answer + ''.join(var)
            string = ''
            continue
        
    if s[-1] != ' ' :
        answer = answer + ''.join(var)
    
    return answer
