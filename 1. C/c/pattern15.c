#include <stdio.h>

int main() {
	
	for(int i=1; i<=5; i++){
		for(int j=9; j>=i; j--){
			printf(" ");
		}
		
		for(int k=1; k<=i; k++){
			printf("%d",k);
		}
		
		for(int o=i-1; o>=1; o--){
			printf("%d",o);
		}
		printf("\n");
	}
	
	return 0;
}

