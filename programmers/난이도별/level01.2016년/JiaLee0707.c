#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int a, int b) {
    char* dayList[] = { "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" };
    int month[12] = { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
    char* answer = (char*)malloc(sizeof(char)*3);
    int count = 0;

    for (int i = 0; i < a - 1; i++) {
        count += month[i];
    }
    count += b - 1;

    answer = dayList[count%7];

    return answer;
}
