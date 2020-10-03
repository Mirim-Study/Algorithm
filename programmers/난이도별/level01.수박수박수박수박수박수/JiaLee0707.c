#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int n) {
    char* answer = (char*)malloc(sizeof(char)*(n*3)+1);
    memset(answer, '\0', (n * 3) + 1);
    char* water = "수";
    char* melon = "박";

    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            strcat(answer, water);
        }
        else {
            strcat(answer, melon);
        }
    }

    return answer;
}
