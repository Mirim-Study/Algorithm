#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num) {
    int answer = 0;
    long long number = num;

    for (answer = 0; answer < 500; answer++) {
        if (number == 1) return answer;
        else if (number % 2 == 0) number /= 2;
        else number = number * 3 + 1;
    }

    return -1;
}
