#include <stdio.h>

int changeNum(int num) {
	int newNum = 0;

	newNum = (num % 10)*100; 	
	newNum += (num - num % 10) % 100; 
	newNum += num / 100;

	return newNum;
}

int main() {
	
	int num1, num2;

	scanf("%d %d", &num1, &num2);

	num1 = changeNum(num1);
	num2 = changeNum(num2);

	printf("%d", num1 > num2 ? num1 : num2);


	return 0;
}
