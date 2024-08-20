#include <stdio.h>

int main() {
	
	int i=2;
	while(i<=10){
		int j=2;
		while(j<=10){
			printf("%d",i);
			j+=2;
		}
		printf("\n");
		i+=2;
	}
	
	return 0;
	
}