#include <stdio.h>

int main() {
	
	int i=1;
	int k=0;
	while(i<=5){
		int j=1;
		while(j<=5){
			printf("%d",k+=1);
			j++;
		}
		printf("\n");
		i++;
	}
	
	return 0;
}