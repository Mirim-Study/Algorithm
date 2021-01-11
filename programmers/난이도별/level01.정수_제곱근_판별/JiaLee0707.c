#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(long long n) {
    long long answer = 0;

    if (sqrt(n) == (int)sqrt(n)) {
        // answer = (sqrt(n)+1) * (sqrt(n)+1);
        answer = pow(sqrt(n) + 1, 2);
    }
    else answer = -1;

    return answer;
}
