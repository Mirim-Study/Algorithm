#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(const char* s) {
    char* answer = (char*)malloc(2);
    memset(answer, 0, sizeof(int)*2);
    
    int size = (int) strlen(s);
    
    if(size%2==0) {
        *answer = s[size/2 - 1];
        *(answer+1) = s[size/2];
    } else {
        *answer = s[size/2];
    }
    
    return answer;
}
