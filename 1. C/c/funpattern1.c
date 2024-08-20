#include <stdio.h>

void pattern(){
	
	int i,j;
	for(int i=1; i<=5; i++){
		for(int j=1; j<=i; j++){
			printf("%d",j);
		}
		printf("\n");
	}
}

int main(){
	
	pattern();
	return 0;
}