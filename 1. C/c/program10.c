#include <stdio.h>

int main() {
	
	int k=11;
	
	for(int i=1; i<=5; i++){
		for(int j=1; j<=5; j++){
			printf("%d \t",k++);
		}
		k+=5;
		printf("\n");
	}
	
	return 0;
}