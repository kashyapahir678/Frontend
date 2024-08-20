#include <stdio.h>

int main(){
	
	int k=65;
	
	for(int i=1; i<=5; i++){
		for(int j=1; j<=5; j++){
			printf("%c \t",k);
			k++;
		}
		printf("\n");
	}
	
	return 0;
}