char* solution(const char* s) {
    int i = 0, EvenOrOdd = 0;
    char* answer = (char*)malloc(sizeof(char) * strlen(s) + 1);
    strcpy(answer, s);

    while (answer[i] != '\0') {
        if (answer[i] == ' ') {
            EvenOrOdd = -1;
        } 
        else if (EvenOrOdd % 2 == 0) {
            if (answer[i] >= 'a' && answer[i] <= 'z') {
                answer[i] = answer[i] - 32;
            }
        }
        else if (EvenOrOdd % 2 == 1){
            if (answer[i] >= 'A' && answer[i] <= 'Z') {
                answer[i] = answer[i] + 32;
            }
        }

        i++;
        EvenOrOdd++;

    }
    return answer;
}
