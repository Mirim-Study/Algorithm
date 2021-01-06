#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool solution(int x) {
    bool answer = true;

    int xx = x;
    int sum = 0;

    while (xx != 0) {
        sum += xx % 10;
        xx /= 10;
    }

    if (x % sum != 0) answer = false;

    return answer;
}
