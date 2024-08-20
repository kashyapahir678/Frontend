#include <stdio.h>

void reverse(int p,int k){
	
	
	
	for(int i=0; i<=p; i++){
		for(int j=0; j<=i; j++){
			printf("%c",k++);
		}
		printf("\n");
	}
}

int main(){

  reverse(5,65);
  return 0;
}