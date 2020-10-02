#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int num) {
    // if(num%2==0) {
    //     return "Even";
    // } else {
    //     return "Odd";
    // }
    
    return num % 2 == 0 ? "Even" : "Odd";
}
