#include <stdio.h>

int main(){
	
	int k=65;
	
	for(int i=1; i<=5; i++){
		for(int k=1; k<=i; k++){
			if(i%1==0){
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