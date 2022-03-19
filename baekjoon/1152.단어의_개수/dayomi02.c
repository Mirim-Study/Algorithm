#include <stdio.h>
#include <string.h>

int main() {
	char arr[1000000] = { 0, };
	int WordCnt = 0, SpaceCnt = 0, len;

	gets(arr);
	len = strlen(arr);

	for (int i = 0; i < len; i++) {
		if (arr[i] == ' ')
			SpaceCnt++;
	}
	
	WordCnt = SpaceCnt + 1;

	if (isspace(arr[0]) != 0) {
		WordCnt--;
	}
	if (isspace(arr[len-1]) != 0) {
		WordCnt--;
	}

	printf("%d\n", WordCnt);

	return 0;
}
