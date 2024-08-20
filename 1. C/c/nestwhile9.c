#include <stdio.h>

int main() {
	
	int i=1;
	int k=11;
	while(i<=5){
		int j=1;
		while(j<=5){
			printf("%d",k++);
			j++;
		}
		
		printf("\n");
		i++;
		k+=5;
	}
	
	return 0;
}