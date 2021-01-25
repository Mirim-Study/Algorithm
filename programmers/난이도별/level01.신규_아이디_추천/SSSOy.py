import re

def solution(new_id):
    
    answer = new_id.lower()
    answer = "".join(re.findall(r"[\w\-\.]" , answer))
    answer = re.sub("\.\.+", ".", answer)
    answer = re.sub("^\.", "", answer)
    answer = re.sub("\.$", "", answer)
    if answer == "" :
        answer = "a"
    if len(answer) >= 16 :
        answer = answer[:15]
        answer = re.sub("\.$", "", answer)
    if len(answer) <= 2 :
        length = len(answer)
        answer = answer + "".join([answer[length - 1] for i in range(0, 3 - length)])
        
    return answer
