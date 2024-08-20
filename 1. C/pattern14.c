#include <stdio.h>

int main() {
	
	for(int i=1; i<5; i++){
		for(int j=i; j<5; j++){
			printf("*");
		}
		for(int t=0; t<2*i-1; t++){
			printf(" ");
		}
		for(int e=0; e<5-i; e++){
			printf("*");
		}
		printf("\n");
	}

	
	for(int k=1; k<5; k++){
		for(int p=1; p<=k; p++){
			printf("*");
		}
		for(int r=0; r<2*(5-k)-1; r++){
			printf(" ");
		}
		for(int q=0; q<k; q++){
			printf("*");
		}
		printf("\n");
	}
	
	return 0;
}