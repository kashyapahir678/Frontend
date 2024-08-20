#include <stdio.h>

int main() {
	
	for(int i=1; i<=10;i++){
		for(int j=1; j<=5; j++){
			if(i%2==0){
				printf("%d",i);
			}
		}
		printf("\n");
	}
	return 0;
}