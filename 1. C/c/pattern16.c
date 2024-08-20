#include <stdio.h>

int main() {
	
	for(int i=1; i<=4; i++){
		for(int j=4; j>i; j--){
			printf("7");
		}
		for(int k=1; k<=i; k++){
			printf("*");
		}
		for(int o=i-1; o>=1; o--){
			printf("*");
		}
		printf("\n");
	}
	
	for(int y=1; y<=3; y++){
		for(int u=1; u<=y; u++){
			printf("7");
		}
		for(int e=y-1; e<=1; e++){
			printf("*");
		}
		for(int w=y-2; w<=1; w++){
			printf("*");
		}
		printf("\n");
	}
	
	return 0;
}