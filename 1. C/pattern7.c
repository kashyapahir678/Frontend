#include <stdio.h>

int main(){
	
	int k=65;
	
	for(int i=1; i<=5;i++){
		for(int j=1; j<=i; j++){
			if(j%2==1){
				printf("%c",k+32);
			}
			else{
				printf("%c",k);
			}
			k++;
			
		}
		printf("\n");
	}
	
	return 0;
}