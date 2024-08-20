#include <stdio.h>

int main(){
	
	int a=1;
	
	for(int i=1; i<=7; i++){
		for(int j=1; j<=7; j++){
			if(j>1 && j<7 && i>1 && i<7){
				printf(" ");
			}
			else{
				printf("*");
			}
		}
		
		printf("\n");
	}
	
	return 0;
}