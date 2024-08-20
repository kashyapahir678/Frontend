#include <stdio.h>

int main() {
	
	for (int i=1;i<=10;i+=2){
		for (int j=1; j<=10; j+=2){
			printf("%d",i);
		}
		printf("\n");
	}
	
	return 0;
}