#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(const char* s) {
    int answer = 0;
    // answer = atoi(s);

    int sign = 1;
    int i = 0;

    if (s[0] == '-') {
        sign = -1;
        i = 1;
    }
    else if (s[0] == '+') {
        i = 1;
    }

    while(s[i] != '\0') {
        answer = answer * 10 + (s[i] - 48);
        i++;
    }

    answer *= sign;

    return answer;
}
